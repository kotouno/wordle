type Props = {
  letter: string
  state: string
}

const LetterTile = (props: Props) => {
  return (
    <div className={`letter-tile ${props.state}`}>
      {props.letter}
    </div>
  )
}

export default LetterTile