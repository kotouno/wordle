type Props = {
  letter: string
  status: string
  addLetter: Function
}

const Letterkey = (props: Props) => {
  return (
    <div className={`key ${props.status}`} onClick={() => props.addLetter(props.letter)}>
      { props.letter }
    </div>
  )
}

export default Letterkey