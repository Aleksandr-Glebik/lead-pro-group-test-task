import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"
import styles from './ThirdPage.module.css'

const ThirdPage = () => {
  return (
    <>
        <InputContainer label='Имя' type='text'/>
        <InputContainer label='Телефон' type='tel'/>
        <InputContainer type='checked'/>
        <div className={styles.btnContainer}>
            <Button className='back'>Назад</Button>
            <Button className='forward'>Далее</Button>
        </div>
    </>
  )
}

export default ThirdPage