import { useState } from 'react'
import classes from './Zadanie.module.scss'

export const Zadanie = () => {

    let [value, setValue] = useState('1001011001101001') // y
    let [word, setWord] = useState('1001011001101001') // x
    let [ans, setAns] = useState(0) // x


    let delta = (x, y) => { // переменная дельта
        if (x === 0) {
            return 0
        }
        if ((x * y) === 1) {
            return 1
        }
        if ((x !== 0) && (y == 0)) {
            return -1
        }
    }

    let calculate = () => {
        let weights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // изначальные веса
        let arr = word.split('')
        let valueArr = value.split("")
        console.log(valueArr)
        console.log(arr)
        let a = arr.map((letter, index) => {
            return letter = weights[index] + delta(Number(letter), Number(value[index]))
        })
        let total = a.reduce((acc, curr) => acc + curr, 0)
        if (total >= 22 && total <= 24) {
            setAns('X')
        }
        if (total > 25) {
            setAns('0')
        }
        if (total < 20) {
            setAns('0')
        }
        // console.log(eval('4*9+3+7/2'))
    }


    return (
        <>
            <div className={classes.container}>
                <input placeholder='Введите букву которую хотите распознать' value={value} onChange={(e) => setValue(e.target.value)}></input>
                <input placeholder='Введите двоичный шестнадцати значный код' value={word} onChange={(e) => setWord(e.target.value)}></input>
                <button onClick={calculate}>Посчитать</button>
            </div>
            <div className={classes.ans}>{ans}</div>
        </>
    )
}

