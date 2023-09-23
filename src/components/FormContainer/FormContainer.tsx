import InputContainer from '../InputContainer/InputContainer'
import Button from '../UI/Button/Button'
import styles from './FormContainer.module.css'

const FormContainer = () => {
  return (
    <form className={styles.container}>
      <div className={styles.page}>
        <span className={styles.page_active}>1</span>/3
      </div>
      <InputContainer label='Возраст' type='range'/>
      <InputContainer label={'Пол'} type='radio'/>
      <Button className='forward'>Далее</Button>
    </form>
  )
}

export default FormContainer