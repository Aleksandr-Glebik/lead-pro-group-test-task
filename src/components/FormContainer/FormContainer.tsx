import Input from '../UI/Input/Input'
import styles from './FormContainer.module.css'

const FormContainer = () => {
  return (
    <form className={styles.container}>
      <div className={styles.page}>
        <span className={styles.page_active}>1</span>/3
      </div>
      <Input />
    </form>
  )
}

export default FormContainer