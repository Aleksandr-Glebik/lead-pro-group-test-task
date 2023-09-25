import { useState } from 'react'
import styles from './InputPhone.module.css'

const InputPhone = () => {
  const [phone, setPhone] = useState('')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  }

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