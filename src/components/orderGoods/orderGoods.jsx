import { Count } from '../Count/Count'
import Style from './orderGoods.module.css'

export const OrderGoods = ({item}) => (
    <li className={Style.item}>
        <img className={Style.image} src="img/burger_1.jpg" alt={item}/>

        <div className="goods">
            <h3 className={Style.title}>{item}</h3>

            <p className={Style.weight}>512г</p>

            <p className={Style.price}>1279
            <span className="currency">₽</span>
            </p>
        </div>
        <Count count={1}/>
    </li>
)