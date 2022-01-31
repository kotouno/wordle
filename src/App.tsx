import { useState } from 'react';
import Layout from './components/layout'
import Board from './components/board'
import Keyboard from './components/keyboard'

function App() {
  const answerWord: string = 'REACT'

  const [enterCount, setEnterCount] = useState<number>(0)
  const enter = () => {
    if (answerLetters[enterCount].length === 5) {
      setEnterCount(prevState => prevState + 1)
    }
  }

  const [answerLetters, setAnswerLetters] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
  ])
  const addLetter = (letter: string) => {
    if (answerLetters[enterCount].length < 5) {
      const updateWord: string[][] = answerLetters.slice()
      updateWord[enterCount].push(letter)
      setAnswerLetters(updateWord)
    }
  }
  const deleteLetter = () => {
    const updateWord: string[][] = answerLetters.slice()
    updateWord[enterCount] = answerLetters[enterCount].slice(0, -1)
    setAnswerLetters(updateWord)
  }

  return (
    <Layout>
      <Board answerLetters={answerLetters} answerWord={answerWord} enterCount={enterCount}/>
      <Keyboard addLetter={addLetter} deleteLetter={deleteLetter} enter={enter} />
    </Layout>
  );
}

export default App;
