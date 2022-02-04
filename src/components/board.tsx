import LettersRow from './letters-row'

type LetterState = {
  state: string;
  letter: string;
}
type LetterRowState = {
  state: string;
  letterStates: LetterState[];
}
type Props = {
  letterRowStates: LetterRowState[]
}

const Board = (props: Props) => {
  return (
    <div className="board">
      {props.letterRowStates.map((letterRowState, i) =>
        <LettersRow
          key={i}
          state={letterRowState.state}
          letterStates={letterRowState.letterStates}
        />
      )}
    </div>
  )
}

export default Board