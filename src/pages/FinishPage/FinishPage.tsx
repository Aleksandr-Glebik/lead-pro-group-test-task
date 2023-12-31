import styles from './FinishPage.module.css'
import successIcon from '../../assets/images/successIcon.png'
import Button from '../../components/UI/Button/Button'
import { Link } from "react-router-dom"
import clsx from 'clsx'

const FinishPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <img
          alt='successIcon'
          src={successIcon}
          className={styles.img}
        />
      </div>
      <p className={styles.text}>
        Ваша заявка успешно отправлена!
      </p>
      <Button className='forward'>
        <Link
          to={'/'}
          className={
            clsx(
              styles.link
            )
          }
        >
          Назад
        </Link>
      </Button>
    </div>
  )
}

export default FinishPage