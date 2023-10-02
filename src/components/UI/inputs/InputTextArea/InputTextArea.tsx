import styles from './InputTextArea.module.css'
import { useStateContext } from '../../../../rootState'
import { ActionType } from '../../../../reducer'
import { useState } from 'react'
import clsx from 'clsx'
import { lengthValidator } from '../../../../utilst/lengthValidator'

let initialMessage = 'Поле не должно быть пустым'

const InputTextArea = () => {
  const { state, dispatch } = useStateContext()
  const { text } = state

  const [valid, setValid] = useState(true)
  const [invalidMessage, setInvalidMessage] = useState(initialMessage)

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value) {
      const { message, isValid } = lengthValidator(event.target.value, 3, 30)
      setInvalidMessage(message)
      setValid(isValid)
    }

    if (dispatch) {
      dispatch({ type: ActionType.SET_TEXT, payload: event.target.value })
    }
  }

  return (
    <div className={styles.container}>
      <textarea
          className={
            clsx(
              styles.textArea,
              !valid ? styles.invalid : ''
              )
            }
            placeholder='Количество символов не более 370'
            value={text}
            onChange={inputHandler}
            required
            maxLength={380}
      />
      <span className={
        clsx(
          styles.message,
          !valid ? styles.invalidMessage : ''
        )}>{invalidMessage}</span>
    </div>
 )
}

export default InputTextArea