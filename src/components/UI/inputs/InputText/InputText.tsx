
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputText.module.css'

const InputText = () => {
  const { state, dispatch } = useStateContext()
  const { name } = state;

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_NAME, payload: event.target.value })
    }
  };

  return (
    <input
        type='text'
        className={styles.text}
        value={name}
        onChange={inputHandler}
    />
 )
}

export default InputText