type Props = {
  letter: string
  addLetter: Function
}

const Letterkey = (props: Props) => {
  return (
    <div className="key" onClick={() => props.addLetter(props.letter)}>
      { props.letter }
    </div>
  )
}

export default Letterkey