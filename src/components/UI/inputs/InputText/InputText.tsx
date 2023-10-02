
import { useState } from 'react';
import clsx from 'clsx';
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputText.module.css'

let invalidMessage = 'Введите имя'
const regex = new RegExp(`^[a-zA-Z][a-zA-Z0-9-_\\.]{3,70}$`)

const InputText = () => {
  const { state, dispatch } = useStateContext()
  const { name } = state;

  const [valid, setValid] = useState(true)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (regex.test(event.target.value)) {
      setValid(true)
    }

    if (!regex.test(event.target.value)) {
      setValid(false)
    }

    if (dispatch) {
      dispatch({ type: ActionType.SET_NAME, payload: event.target.value })
    }
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        className={
          clsx(
            styles.input,
            !valid ? styles.invalid : ''
          )
        }
        value={name}
        onChange={inputHandler}
        required
        // placeholder='Введите Ваше имя'
      />
    <span className={
            clsx(
              styles.message,
              !valid ? styles.invalidMessage : ''
            )
          }
    >
      {invalidMessage}
    </span>
  </div>
 )
}

export default InputText