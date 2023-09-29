
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputCheckbox.module.css'

const InputCheckbox = () => {
  const { state, dispatch } = useStateContext()
  const { check } = state;

  const inputHandler = () => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_CHECK, payload: !check })
    }
  }

  return (
    <div className={styles.container}>
        <input
            type="checkbox"
            name="privacyPolicy"
            className={styles.input}
            checked={check}
            onChange={inputHandler}
        />
        <label
            htmlFor='privacyPolicy'
            className={styles.label}
        >
            Я согласен с политикой конфиденциальности
        </label>
    </div>
 )
}

export default InputCheckbox