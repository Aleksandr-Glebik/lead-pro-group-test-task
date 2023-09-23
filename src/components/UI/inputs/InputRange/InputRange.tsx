import { useState } from 'react'
import styles from './InputRange.module.css'

const InputRange = () => {
  const [age, setAge] = useState('25')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  return (
    <div className={styles.container}>
        <div className={styles.container__age}>{ age }</div>
        <input
            type="range"
            id="age"
            name="age"
            min="18"
            max="35"
            step="1"
            className={styles.container__input}
            onChange={inputHandler}
            defaultValue={age}
        />
        <label className={styles.container__label}>
            <span className={styles.container__label_text}>18 лет</span>
            <span className={styles.container__label_text}>35 лет</span>
        </label>
  </div>
  )
}

export default InputRange