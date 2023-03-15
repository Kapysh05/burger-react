import { useState } from 'react'
import Style from './Count.module.css'

export const Count = (props) => {

    const [count, setCount] = useState(props.count)

    const addCount = () => {
        setCount(count + 1);
    }

    const removeCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    return (
        <div className={Style.count}>
            <button className={Style.minus} onClick={removeCount} disabled={count === 1}>-</button>
            <p className={Style.amount}>{count}</p>
            <button className={Style.plus} onClick={addCount}>+</button>
        </div>
    )
}