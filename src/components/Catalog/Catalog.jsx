import { Order } from '../Order/Order'
import { Container } from '../Container/Container'
import Style from './Catalog.module.css'
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsync } from '../../Store/product/productSlice';

export const Catalog = () => {

    const { products } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const { category, activeCategory } = useSelector(state => state.category)

    useEffect(() => {
        if (category.length) {
            dispatch(productRequestAsync(category[activeCategory].title))
        }
    }, [category, activeCategory])

    return (
        <section className={Style.catalog}>
            <Container className={Style.container}>
            <Order/>
            <div className={Style.wrapper}>
            <h2 className={Style.title}>Бургеры</h2>
            <div className={Style.wrap_list}>
                <ul className={Style.list}>
                    {products.map((item, i) => (
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