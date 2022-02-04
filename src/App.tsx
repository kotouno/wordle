import { useEffect, useState } from 'react';
import Layout from './components/layout'
import Message from './components/message'
import Board from './components/board'
import Keyboard from './components/keyboard'

function App() {
  const answerWord: string = 'UNCHI'

  type LetterState = {
    state: string;
    letter: string;
  }
  type LetterRowState = {
    state: string;
    letterStates: LetterState[];
  }
  const InitialLetterRowStates: LetterRowState[] = []
  for (let i = 0; i < 6; i++) {
    const state: string = i === 0 ? 'isInputting' : ''
    const letterRowState: LetterRowState = {
      state,
      letterStates: []
    }
    for (let i = 0; i < 5; i++) {
      letterRowState.letterStates.push({
        state: '',
        letter: '',
      })
    }
    InitialLetterRowStates.push(letterRowState)
  }
  const [letterRowStates, setLetterRowStates] = useState<LetterRowState[]>(InitialLetterRowStates)
  const [isClear, setClearStatus] = useState<boolean>(false)
  const [isChecking, setChekingState] = useState<boolean>(false)
  const [answeredCount, setAnsweredCount] = useState<number>(0)
  const [letterCount, setLetterCount] = useState<number>(0)
  const [correctLetters, setCorrectLetters] = useState<string[]>([])
  const [presentLetters, setPresentLetters] = useState<string[]>([])
  const [absentLetters, setAbsentLetters] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')

  const addLetter = (letter: string) => {
    if (letterCount < 5 && answeredCount !== 6) {
      setLetterRowStates((prevState) => {
        const copyForUpdate = prevState.slice()
        copyForUpdate[answeredCount].letterStates[letterCount] = {
          letter,
          state: 'inputted'
        }
        return copyForUpdate
      })
      setLetterCount(prevState => prevState + 1)
    }
  }

  const deleteLetter = () => {
    if (letterCount > 0) {
      setLetterRowStates((prevState) => {
        const copyForUpdate = prevState.slice()
        copyForUpdate[answeredCount].letterStates[letterCount - 1] = {
          letter: '',
          state: ''
        }
        return copyForUpdate
      })
      setLetterCount(prevState => prevState - 1)
    }
  }

  const answer = () => {
    if (answeredCount !== 6 && !isClear) {
      if (!isChecking) {
        if (letterCount === 5) {
          setChekingState(true)
          const promiseList: Promise<void>[] = []
          for (let i = 0; i < 5; i++) {
            const promise: Promise<void> = new Promise((resolve) => {
              setTimeout(() => {
                let state: string
                const checkLetter = letterRowStates[answeredCount].letterStates[i].letter
                if (checkLetter === answerWord[i]) {
                  state = 'correct'
                } else if (answerWord.indexOf(checkLetter) !== -1) {
                  state = 'present'
                } else {
                  state = 'absent'
                }
                setLetterRowStates((prevState) => {
                  const copyForUpdate = prevState.slice()
                  copyForUpdate[answeredCount].letterStates[i].state = state
                  return copyForUpdate
                })
                resolve()
              }, i * 300);
            })
            promiseList.push(promise)
          }

          // 上記チェック終了後更新
          Promise.all(promiseList).then(() => {
            letterRowStates[answeredCount].letterStates.forEach((letterState, i) => {
              if (letterState.letter === answerWord[i]) {
                addCorrectLetters(letterState.letter)
              } else if (answerWord.indexOf(letterState.letter) !== -1) {
                addPresentLetters(letterState.letter)
              } else {
                addAbsentLetters(letterState.letter)
              }
            })

            setAnsweredCount(prevState => prevState + 1)
            setLetterCount(0)
            setChekingState(false)
          })
        } else {
          setLetterRowStates((prevState) => {
            const copyForUpdate = prevState.slice()
            copyForUpdate[answeredCount].state = 'shake'
            return copyForUpdate
          })
          setTimeout(() => {
            setLetterRowStates((prevState) => {
              const copyForUpdate = prevState.slice()
              copyForUpdate[answeredCount].state = ''
              return copyForUpdate
            })
          }, 500);
          setMessage('Not enough letters')
        }
      }
    }
  }

  const addCorrectLetters = (letter: string) => {
    if (correctLetters.indexOf(letter) === -1) {
      setCorrectLetters((prevLetters) => [...prevLetters, letter])
    }
  }

  const addPresentLetters = (letter: string) => {
    if (presentLetters.indexOf(letter) === -1) {
      setPresentLetters((prevLetters) => [...prevLetters, letter])
    }
  }

  const addAbsentLetters = (letter: string) => {
    if (absentLetters.indexOf(letter) === -1) {
      setAbsentLetters((prevLetters) => [...prevLetters, letter])
    }
  }

  useEffect(() => {
    if (correctLetters.length === 5) {
      setClearStatus(true)
      setMessage('Is correct!')
    }
  }, [correctLetters])

  useEffect(() => {
    if (answeredCount === 6) {
      setMessage(`${answerWord} is correct`)
    }
  }, [answeredCount])

  useEffect(() => {
    setTimeout(() => {
      setMessage('')
    }, 2000)
  }, [message])

  return (
    <Layout>
      <Message message={message} />
      <Board letterRowStates={letterRowStates} />
      <Keyboard
        correctLetters={correctLetters}
        presentLetters={presentLetters}
        absentLetters={absentLetters}
        addLetter={addLetter}
        deleteLetter={deleteLetter}
        answer={answer}
      />
    </Layout>
  );
}

export default App;
