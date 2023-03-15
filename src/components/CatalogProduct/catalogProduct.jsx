import Style from './catalogProduct.module.css'

export const CatalogProduct = (props) => (
    <article className={Style.product}>
    <img src="img/photo-5.jpg" alt={props.title} className={Style.image}/>

    <p className={Style.price}>689<span className="currency">₽</span></p>

    <h3 className={Style.title}>
        <button className={Style.detail}>{props.title}</button>
    </h3>

    <p className={Style.weight}>520г</p>

    <button className={Style.add} type="button">Добавить</button>
    </article>
)