import FirstPage from '../../pages/FirstPage/FirstPage'
import SecondPage from '../../pages/SecondPage/SecondPage'
import ThirdPage from '../../pages/ThirdPage/ThirdPage'
import styles from './FormContainer.module.css'

const FormContainer = () => {
  return (
    <form className={styles.container}>
      <div className={styles.page}>
        <span className={styles.page_active}>3</span>/3
      </div>
      {/* <FirstPage /> */}
      {/* <SecondPage /> */}
      <ThirdPage />
    </form>
  )
}

export default FormContainer