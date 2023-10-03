import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './ThirdPage.module.css'
import { useStateContext } from "../../rootState"
import { clsx } from "clsx"

const ThirdPage = () => {
  const [clickable, setClickable] = useState(false)
  const { state } = useStateContext()
  const { name, phone, check } = state

  useEffect(() => {
    if (name && phone && check ) {
      setClickable(true)
    }
    if (name && phone && !check ) {
      setClickable(false)
    }
  }, [name, phone, check ])

  return (
    <>
        <InputContainer label='Имя' type='text'/>
        <InputContainer label='Телефон' type='tel'/>
        <InputContainer type='checked'/>
        <div className={styles.btnContainer}>
            <Button className='back'>
              <Link
                to={'/2'}
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
              className='send'
              disabled={!clickable ? true : false}
            >
              {
                clickable ? (
                  <Link
                    to={'/result'}
                  className={
                    clsx(
                      styles.link,
                      styles.link__forward
                    )
                  }>
                    Отправить заявку
                  </Link>
                ) : (
                  'Отправить заявку'
                )
              }
            </Button>
        </div>
    </>
  )
}

export default ThirdPage