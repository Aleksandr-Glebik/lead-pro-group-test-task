import { useState, useEffect } from "react"
import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './SecondPage.module.css'
import { Link } from "react-router-dom"
import { useStateContext } from "../../rootState"
import clsx from "clsx"

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
    <div>
        <InputContainer label='Город' type='select' style={{
          position: 'relative',
          zIndex: '1000 !important'
        }}/>
        <div className={styles.gap}></div>
        <InputContainer label='Сообщение' type='textArea' style={{
          position: 'relative',
          zIndex: '10 !important'
        }}/>
        <div className={styles.btnContainer}>
            <Button className='back'>
              <Link
                to={'/'}
                className={
                  clsx(
                    styles.link,
                    styles.link__back
                  )
                }
              >
                Назад
              </Link>
            </Button>
            <Button
              className='forward'
              disabled={!clickable ? true : false}
            >
              {
                clickable ? (
                  <Link
                    to={'/3'}
                    className={
                      clsx(
                        styles.link,
                        styles.link__forward
                      )
                    }
                  >
                    Далее
                  </Link>
                ) : (
                  'Далее'
                )
              }
            </Button>
        </div>
    </div>
  )
}

export default SecondPage