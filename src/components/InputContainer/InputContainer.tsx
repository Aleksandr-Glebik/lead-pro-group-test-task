
import styles from './InputContainer.module.css'
import InputRange from '../UI/inputs/InputRange/InputRange'
import InputRadio from '../UI/inputs/InputRadio/InputRadio'
import InputSelect from '../UI/inputs/InputSelect/InputSelect'
import InputTextArea from '../UI/inputs/InputTextArea/InputTextArea'
import InputText from '../UI/inputs/InputText/InputText'
import InputPhone from '../UI/inputs/InputPhone/InputPhone'
import InputCheckbox from '../UI/inputs/InputCheckbox/InputCheckbox'
interface InputContainerProps {
  label?: string
  type: 'range' | 'radio' | 'select' | 'textArea' | 'text' | 'tel' | 'checked'
}

const InputContainer: React.FC<InputContainerProps> = ({ label, type }) => {
  const renderInput = (type: string) => {
    switch(type) {
      case 'range':
        return <InputRange />
      case 'radio':
        return <InputRadio />
      case 'select':
        return <InputSelect />
      case 'textArea':
        return <InputTextArea />
      case 'text':
        return <InputText />
      case 'tel':
        return <InputPhone />
      case 'checked':
        return <InputCheckbox />
      default:
        return null
    }
  }

  return (
    <div className={styles.wrapper}>
      {
        label &&
          <div className={styles.wrapper__label}>
            { label }
          </div>
      }
      { renderInput(type) }
    </div>
  )
}

export default InputContainer