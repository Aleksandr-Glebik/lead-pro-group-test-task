import { useState } from 'react'
import styles from './InputCheckbox.module.css'

const InputCheckbox = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(true)

  const inputHandler = () => {
    setPrivacyPolicy(prev => !prev)
  }

  return (
    <div className={styles.container}>
        <input
            type="checkbox"
            name="privacyPolicy"
            className={styles.input}
            checked={privacyPolicy}
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