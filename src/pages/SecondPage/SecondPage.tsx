import { useState, useEffect } from "react"
import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './SecondPage.module.css'
import { Link } from "react-router-dom"
import { useStateContext } from "../../rootState"

const SecondPage = () => {
  const [clickable, setClickable] = useState(false)
  const { state } = useStateContext()
  const { city, text } = state

  useEffect(() => {
    if (city && text) {
      setClickable(true)
    }
  }, [city, text])

  return (
    <>
        <InputContainer label='Город' type='select'/>
        <InputContainer label='Сообщение' type='textArea'/>
        <div className={styles.btnContainer}>
            <Button className='back'>
              <Link to={'/'} className={styles.link}>
                Назад
              </Link>
            </Button>
            <Button
              className='forward'
              disabled={!clickable ? true : false}
            >
              {
                clickable ? (
                  <Link to={'/3'} className={styles.link}>
                    Далее
                  </Link>
                ) : (
                  'Далее'
                )
              }
            </Button>
        </div>
    </>
  )
}

export default SecondPage