import EnterKey from './enter-key'
import DeleteKey from './delete-key'
import LetterKey from './letter-key'

type Props = {
  addLetter: Function
  deleteLetter: Function
  enter: Function
}

const LetterKeyboard = (props: Props) => {
  return (
    <div id="keyboard">
      <div className="row">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter: string, i: number) =>
          <LetterKey key={i} letter={letter} addLetter={props.addLetter} />
        )}
      </div>
      <div className="row">
        <div className="spacer half"></div>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter: string, i: number) =>
          <LetterKey key={i} letter={letter} addLetter={props.addLetter} />
        )}
        <div className="spacer half"></div>
      </div>
      <div className="row">
        <EnterKey enter={props.enter} />
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter: string, i: number) =>
          <LetterKey key={i} letter={letter} addLetter={props.addLetter} />
        )}
        <DeleteKey deleteLetter={props.deleteLetter} />
      </div>
    </div>
  )
}

export default LetterKeyboard