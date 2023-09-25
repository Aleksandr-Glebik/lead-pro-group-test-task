import { useState } from 'react'
import styles from './InputTextArea.module.css'

const InputTextArea = () => {
  const [text, setText] = useState('')

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
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