import { useEffect, useState } from 'react';
import styles from './FirstPage.module.css';
import InputContainer from '../../components/InputContainer/InputContainer';
import Button from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../rootState';

const FirstPage = () => {
  const [clickable, setClickable] = useState(false);
  const { state } = useStateContext()
  const { age, sex } = state;

  useEffect(() => {
    if (age && sex) {
      setClickable(true)
    }
  }, [age, sex])

  return (
    <>
      <InputContainer label="Возраст" type="range" />
      <InputContainer label={'Пол'} type="radio" />
      <div className={styles.btnContainer}>
        <Button
          className="forward"
          disabled={!clickable ? true : false}
          >
          {
            clickable ? (
              <Link to={'/2'} className={styles.link}>
                Далее
              </Link>
            ) : (
              'Далее'
              )
            }
        </Button>
      </div>
    </>
  );
};

export default FirstPage;
