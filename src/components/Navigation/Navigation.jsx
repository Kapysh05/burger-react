import { Container } from '../Container/Container'
import Style from './Navigation.module.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { categoryRequestAsync, changeCategory } from '../../Store/category/categorySlice'
import { useEffect } from 'react'
import { API_URI } from '../../const'

export const Navigation = () => {

    const { category, activeCategory } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(categoryRequestAsync('max'));
    }, [])

    return (
    <nav className={Style.navigation}>
      <Container className={Style.container}>
        <ul className={Style.list}>
          {category.map((item, i) => 
            <li  key={item.title} className={Style.item}>
              <button className={classNames(
                Style.button,
                activeCategory === i ? Style.button_active : ' ')}
                style={{backgroundImage: `url(${API_URI}${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({indexCategory: i}))
                }}>
              {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
    )
}