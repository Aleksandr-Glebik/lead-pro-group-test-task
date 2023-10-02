
import { useState } from 'react';
import clsx from 'clsx';
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputText.module.css'
import { lengthValidator } from '../../../../utils/lengthValidator';

let initialMessage = 'Поле не должно быть пустым'

const InputText = () => {
  const { state, dispatch } = useStateContext()
  const { name } = state;

  const [valid, setValid] = useState(true)
  const [invalidMessage, setInvalidMessage] = useState(initialMessage)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const { message, isValid } = lengthValidator(event.target.value, 3, 100)
      setInvalidMessage(message)
      setValid(isValid)
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