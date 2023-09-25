import styles from './InputSelect.module.css'

const cityList  = [
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

    return (
        <div className={styles.container}>
            <select
                name="city"
                id="city"
                className={styles.select}
            >
                {
                    cityList.map(city => (
                        <option
                            key={city.id}
                            value={city.value}
                            className={styles.option}
                        >
                            { city.text }
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default InputSelect