import { Order } from '../Order/Order'
import { Container } from '../Container/Container'
import Style from './Catalog.module.css'
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';

const goodsList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
  ];

export const Catalog = () => {

    return (
        <section className={Style.catalog}>
            <Container className={Style.container}>
            <Order/>
            <div className={Style.wrapper}>
            <h2 className={Style.title}>Бургеры</h2>
            <div className={Style.wrap_list}>
                <ul className={Style.list}>
                    {goodsList.map((item, i) => (
                        <li key={i} className={Style.item}> 
                            <CatalogProduct title={item.title} />
                        </li>    
                    ))}
                </ul>
            </div>
            </div>
            </Container>
    </section>
    )
}