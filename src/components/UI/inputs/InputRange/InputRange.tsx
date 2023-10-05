import { useEffect, useRef } from 'react'
import styles from './InputRange.module.css';
import { useStateContext } from '../../../../rootState';
import { ActionType } from '../../../../reducer';
import { stepCount } from '../../../../utils/stepCount';

const InputRange = () => {
  const { state, dispatch } = useStateContext()
  const { age } = state;
  const outputRef = useRef<HTMLOutputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_AGE, payload: event.target.value })
    }
  };

  const changeOutputPosition = (age: number) => {
    if (outputRef.current && inputRef.current) {
      if (age) {
        let inputWidth = inputRef.current.clientWidth
        let widthStep = Math.round(inputWidth / (35 - 17))
        let leftPositionOutput = stepCount(+age) * widthStep + 'px'
        outputRef.current.style.left = leftPositionOutput
      }
    }
  }

  useEffect(() => {
    changeOutputPosition(+age)
  }, [age])

  return (
    <div className={styles.container}>
      <output
        htmlFor='age'
        className={styles.output}
        ref={outputRef}
      >
        {age}
      </output>
      <input
        type="range"
        id="age"
        name="age"
        min="18"
        max="35"
        step="1"
        className={styles.container__input}
        onChange={inputHandler}
        defaultValue={age === '' ? age : 26}
        ref={inputRef}
      />
      <label className={styles.container__label}>
        <span className={styles.container__label_text}>18 лет</span>
        <span className={styles.container__label_text}>35 лет</span>
      </label>
    </div>
  );
};

export default InputRange;

