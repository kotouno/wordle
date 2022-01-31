import LettersRow from './letters-row'

type Props = {
  answerLetters: string[][]
  answerWord: string
  enterCount: number
}

const Board = (props: Props) => {
  return (
    <div className="board">
      {props.answerLetters.map((letters: string[], i: number) =>
        <LettersRow key={i} letters={letters} answerWord={props.answerWord} isEntered={i < props.enterCount} />
      )}
    </div>
  )
}

export default Board