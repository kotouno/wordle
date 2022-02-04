import deleteIcon from '../delete-icon.svg'

type Props = {
  deleteLetter: Function
}

const DeleteKey = (props: Props) => {
  return (
    <div className="one-and-a-half key" onClick={ () => props.deleteLetter() }>
      <img src={deleteIcon} alt="delete-key" />
    </div>
  )
}

export default DeleteKey