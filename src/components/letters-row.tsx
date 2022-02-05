import LetterTile from './letter-tile'

type Props = {
  state: string
  letterStates: {
    state: string
    letter: string
  }[]
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