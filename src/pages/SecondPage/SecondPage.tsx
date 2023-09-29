import InputContainer from "../../components/InputContainer/InputContainer"
// import Button from "../../components/UI/Button/Button"
import styles from './SecondPage.module.css'

const SecondPage = () => {
  return (
    <>
        <InputContainer label='Город' type='select'/>
        <InputContainer label='Сообщение' type='textArea'/>
        <div className={styles.btnContainer}>
            {/* <Button className='back'>Назад</Button> */}
            {/* <Button className='forward'>Далее</Button> */}
        </div>
    </>
  )
}

export default SecondPage