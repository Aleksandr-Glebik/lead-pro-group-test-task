import styles from './InputRadio.module.css';
import { useStateContext } from '../../../../rootState';
import { ActionType } from '../../../../reducer';

const InputRadio = () => {
  const { state, dispatch } = useStateContext()
  const { sex } = state;

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: ActionType.SET_SEX, payload: event.target.value })
    }
  };

  return (
    <div className={styles.wrapper} onChange={inputHandler}>
      <div className={styles.container}>
        <input
          type="radio"
          id="male"
          name="sex"
          value="male"
          className={styles.container__input}
          checked={sex === 'male'}
          onChange={inputHandler}
        />
        <label htmlFor="male" className={styles.container__label}>
          Мужской
        </label>
      </div>
      <div className={styles.container}>
        <input
          type="radio"
          id="female"
          name="sex"
          value="female"
          className={styles.container__input}
          checked={sex === 'female'}
          onChange={inputHandler}
        />
        <label htmlFor="female" className={styles.container__label}>
          Женский
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
