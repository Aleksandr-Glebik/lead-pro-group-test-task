import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputPhone.module.css'

const InputPhone = () => {
  const { state, dispatch } = useStateContext()
  const { phone } = state;

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_PHONE, payload: event.target.value })
    }
  };

  return (
    <input
        type='tel'
        className={styles.phone}
        value={phone}
        onChange={inputHandler}
    />
 )
}

export default InputPhone