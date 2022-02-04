type Props = {
  answer: Function
}

const Enter = (props: Props) => {
  return (
    <div className="one-and-a-half key" onClick={() => props.answer()}>enter</div>
  )
}

export default Enter