import styles from './InputTextArea.module.css'
import { useStateContext } from '../../../../rootState';
import { ActionType } from '../../../../reducer';

const InputTextArea = () => {
  const { state, dispatch } = useStateContext()
  const { text } = state;

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_TEXT, payload: event.target.value })
    }
  }

  return (
    <textarea
        className={styles.textArea}
        placeholder='Количество символов не более 370'
        value={text}
        onChange={inputHandler}
    />
 )
}

export default InputTextArea