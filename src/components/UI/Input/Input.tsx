import { useState } from 'react'
import styles from './Input.module.css'

const Input = () => {
  const [age, setAge] = useState('25')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__label}>
        Возраст
      </div>
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
    </div>
  )
}

export default Input