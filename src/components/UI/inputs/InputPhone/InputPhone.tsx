import { useEffect, useState } from 'react';
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputPhone.module.css'
import clsx from 'clsx';

let invalidMessage = 'Введите номер телефона'
const regex = new RegExp(`(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?`)
let BYPhoneMask = '+375 (_ _) _ _ _-_ _-_ _'
let RUPhoneMask = '+7 (_ _ _) _ _ _-_ _ _ _'

const InputPhone = () => {
  const { state, dispatch } = useStateContext()
  const { phone } = state;

  const [valid, setValid] = useState(true)
  const [phoneMask, setPhoneMask] = useState(BYPhoneMask)

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://ipinfo.io/json", {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
      const jsonResponse = await request.json()
      console.log(jsonResponse.ip, jsonResponse.country)
      // InputPhone.tsx:18 GET https://ipinfo.io/json 429 (Too Many Requests)
      if (jsonResponse.country === 'BY') {
        setPhoneMask(BYPhoneMask)
      } else if (jsonResponse.country === 'RU') {
        setPhoneMask(RUPhoneMask)
      }
    }
    fetchData()
  }, [])

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (regex.test(event.target.value)) {
      setValid(true)
    }

    if (!regex.test(event.target.value)) {
      setValid(false)
    }

    if (dispatch) {
      dispatch({ type: ActionType.SET_PHONE, payload: event.target.value })
    }
  };

  return (
    <div className={styles.container}>
      <input
          type='tel'
          className={
            clsx(
              styles.phone,
              !valid ? styles.invalid : ''
            )
          }
          value={phone}
          onChange={inputHandler}
          placeholder={phoneMask}
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

export default InputPhone