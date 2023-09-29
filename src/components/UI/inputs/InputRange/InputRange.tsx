import styles from './InputRange.module.css';
import { useStateContext } from '../../../../rootState';
import { ActionType } from '../../../../reducer';

const InputRange = () => {
  const { state, dispatch } = useStateContext()
  const { age } = state;

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_AGE, payload: event.target.value })
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__age}>{age}</div>
      <input
        type="range"
        id="age"
        name="age"
        min="18"
        max="35"
        step="1"
        className={styles.container__input}
        onChange={inputHandler}
        defaultValue={age}
      />
      <label className={styles.container__label}>
        <span className={styles.container__label_text}>18 лет</span>
        <span className={styles.container__label_text}>35 лет</span>
      </label>
    </div>
  );
};

export default InputRange;

