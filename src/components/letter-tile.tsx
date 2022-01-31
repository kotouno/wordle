type Props = {
  letter: string
  status: string
}

const LetterTile = (props: Props) => {
  return (
    <div className={`letter-tile ${props.status}`}>
      {props.letter}
    </div>
  )
}

export default LetterTile