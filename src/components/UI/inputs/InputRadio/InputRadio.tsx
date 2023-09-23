import { useState } from 'react'
import styles from './InputRadio.module.css'

const InputRadio = () => {
  const [sex, setSex] = useState('male')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSex(event.target.value)
  }

  return (
    <div className={styles.wrapper}  onChange={inputHandler}>
        <div className={styles.container}>
            <input
                type="radio"
                id="male"
                name="sex"
                value='male'
                className={styles.container__input}
                checked={sex === 'male'}
                onChange={inputHandler}
            />
            <label htmlFor="male" className={styles.container__label}>
                Мужской
            </label>
        </div>
        <div className={styles.container}>
            <input
                type="radio"
                id="female"
                name="sex"
                value='female'
                className={styles.container__input}
                checked={sex === 'female'}
                onChange={inputHandler}
            />
            <label htmlFor="female" className={styles.container__label}>
                Женский
            </label>
        </div>
        { sex }
  </div>
  )
}

export default InputRadio