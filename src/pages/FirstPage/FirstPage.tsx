import InputContainer from "../../components/InputContainer/InputContainer"
import Button from "../../components/UI/Button/Button"

const FirstPage = () => {
  return (
    <>
        <InputContainer label='Возраст' type='range'/>
        <InputContainer label={'Пол'} type='radio'/>
        <Button className='forward'>Далее</Button>
    </>
  )
}

export default FirstPage