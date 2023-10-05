import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { clsx } from "clsx"
import { useStateContext } from "../../rootState"
import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './ThirdPage.module.css'
import isLoadingIconSrc from '../../assets/images/loadingIconBtn.png'
import { ActionType } from "../../reducer"

const ThirdPage = () => {
  const [clickable, setClickable] = useState(false)
  const { state, dispatch } = useStateContext()
  const { name, phone, check } = state
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (name && phone && check ) {
      setClickable(true)
    }
    if (name && phone && !check ) {
      setClickable(false)
    }
  }, [name, phone, check ])

  const sendHandler = () => {
    setIsLoading(true)

    // setTimeout - emulate send form (here may be fetch method post)
    setTimeout(() => {
      setIsLoading(false)

      // reset state
      if (dispatch) {
        dispatch({ type: ActionType.RESET_STATE })
      }

      navigate('/result')
    }, 3000);
  }

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
                  <>
                    <img
                      src={isLoadingIconSrc}
                      alt="loading_icon"
                      className={
                        clsx(
                          isLoading ? styles.isLoading : styles.hide
                        )
                      }
                    />
                    <span
                      className={
                            clsx(
                              styles.link,
                              styles.link__forward,
                              isLoading ? styles.flexStart : ''
                            )
                      }
                      onClick={sendHandler}
                    >
                      Отправить заявку
                    </span>
                  </>
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