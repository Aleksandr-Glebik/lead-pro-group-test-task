import { useState } from 'react';
import { ActionType } from '../../../../reducer';
import { useStateContext } from '../../../../rootState';
import styles from './InputSelect.module.css'
import clsx from 'clsx';
interface ICityList {
    id: number
    value: string
    text: string
}

const cityList: ICityList[]  = [
    {
        id: 1,
        value: 'minsk',
        text: 'Минск'
    },
    {
        id: 2,
        value: 'brest',
        text: 'Брест'
    },
    {
        id: 3,
        value: 'vitebsk',
        text: 'Витебск'
    },
    {
        id: 4,
        value: 'grodno',
        text: 'Гродно'
    },
    {
        id: 5,
        value: 'gomel',
        text: 'Гомель'
    },
    {
        id: 6,
        value: 'mogilev',
        text: 'Могилев'
    }
]

const InputSelect = () => {
    const { dispatch } = useStateContext()

    const [currentCityId, setCurrentCityId] = useState(1)
    const [isOpen, setIsOpen] = useState(false)

    const displayListItems = (id = 1, arr: ICityList[]): ICityList[] => arr.filter(item => item.id !== id)

    const findItem = (id: number, arr: ICityList[]) => arr.find(item => item.id === id)

    const itemHandler = (event: React.MouseEvent<HTMLElement>) => {
        if (event.currentTarget.dataset.id) {
            setCurrentCityId(+event.currentTarget.dataset.id)
            setIsOpen(false)

            if (dispatch) {
                dispatch({
                    type: ActionType.SET_CITY,
                    payload: findItem(+event.currentTarget.dataset.id, cityList)?.value || ''
                })
            }
        }
    }

    const dispatchCurrentCity = () => {
        if (dispatch) {
            dispatch({
                type: ActionType.SET_CITY,
                payload: findItem(currentCityId, cityList)?.value || ''
            })
        }
    }

    return (
        <div className={styles.container}>
            <div
                className={clsx(
                        styles.label,
                        isOpen ? styles.up : ''
                    )
                }
                onClick={() => setIsOpen(prev => !prev)}
            >
                {
                    <span
                        onClick={dispatchCurrentCity}
                        className={styles.currentIteMLabelStyle}
                    >
                        {findItem(currentCityId, cityList)?.text}
                    </span>
                }
            </div>
            <ul
                className={
                    clsx(
                        styles.list,
                        isOpen ? '' : styles.up
                    )
                }
            >
                {
                    displayListItems(currentCityId, cityList).map(city => (
                        <li
                            key={city.id}
                            className={styles.item}
                            data-id={city.id}
                            onClick={itemHandler}
                        >
                            { city.text }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default InputSelect