import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './ThirdPage.module.css'
import { useStateContext } from "../../rootState"

const ThirdPage = () => {
  const [clickable, setClickable] = useState(false)
  const { state } = useStateContext()
  const { name, phone, check } = state

  useEffect(() => {
    if (name && phone && check ) {
      setClickable(true)
    }
  }, [name, phone, check ])

  return (
    <>
        <InputContainer label='Имя' type='text'/>
        <InputContainer label='Телефон' type='tel'/>
        <InputContainer type='checked'/>
        <div className={styles.btnContainer}>
            <Button className='back'>
              <Link to={'/2'} className={styles.link}>
                Назад
              </Link>
            </Button>
            <Button
              className='forward'
              disabled={!clickable ? true : false}
            >
              {
                clickable ? (
                  <Link to={'/result'} className={styles.link}>
                    Отправить заявку
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

export default ThirdPage