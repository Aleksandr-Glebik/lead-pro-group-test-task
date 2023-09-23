
import styles from './InputContainer.module.css'
import InputRange from '../UI/inputs/InputRange/InputRange'
import InputRadio from '../UI/inputs/InputRadio/InputRadio'

interface InputContainerProps {
  label: string
  type: 'range' | 'radio'
}

const InputContainer: React.FC<InputContainerProps> = ({ label, type }) => {
  const renderInput = (type: string) => {
    switch(type) {
      case 'range':
        return <InputRange />
      case 'radio':
        return <InputRadio />
      default:
        return null
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__label}>
        { label }
      </div>
      { renderInput(type) }
    </div>
  )
}

export default InputContainer