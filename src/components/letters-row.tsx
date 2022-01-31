import LetterTile from './letter-tile'

type Props = {
  letters: string[]
  isEntered: boolean
  answerWord: string
}

const LettersRow = (props: Props) => {
  type letterStatus = {
    status: string
    letter: string
  }

  const letters: letterStatus[] = []
  for (let i: number = 0; i < 5; i++) {
    if (props.isEntered) {
      let status: string = 'absent'
      if (props.letters[i] === props.answerWord[i]) {
        status = 'collect'
      } else if (~props.answerWord.indexOf(props.letters[i])) {
        status = 'present'
      }
      letters.push({
        status,
        letter: props.letters[i]
      })
    } else {
      if (i < props.letters.length) {
        letters.push({
          status: '',
          letter: props.letters[i],
        })
      } else {
        letters.push({
          status: '',
          letter: '',
        })
      }
    }
  }

  return (
    <div className="letters-row">
      {letters.map((letterObj: letterStatus, i: number) =>
        <LetterTile key={i} letter={letterObj.letter} status={letterObj.status} />
      )}
    </div>
  )
}

export default LettersRow