type Props = {
  enter: Function
}

const Enter = (props: Props) => {
  return (
    <div className="one-and-a-half key" onClick={() => props.enter()}>enter</div>
  )
}

export default Enter