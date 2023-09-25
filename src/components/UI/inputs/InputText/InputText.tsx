import { useState } from 'react'
import styles from './InputText.module.css'

const InputText = () => {
  const [name, setName] = useState('')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  
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