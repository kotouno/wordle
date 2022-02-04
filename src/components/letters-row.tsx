import LetterTile from './letter-tile'

type LetterState = {
  state: string
  letter: string
}

type Props = {
  state: string
  letterStates: LetterState[]
}

const LettersRow = (props: Props) => {
  return (
    <div className={`letters-row ${props.state}`}>
      {props.letterStates.map((letterState, i) =>
        <LetterTile key={i} letter={letterState.letter} state={letterState.state} />
      )}
    </div>
  )
}

export default LettersRow