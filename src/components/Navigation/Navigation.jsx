import { Container } from '../Container/Container'
import Style from './Navigation.module.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../Store/category/categorySlice'

export const Navigation = () => {

    const { category, activeCategory } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    return (
    <nav className={Style.navigation}>
      <Container className={Style.container}>
        <ul className={Style.list}>
          {category.map((item, i) => 
            <li  key={i} className={Style.item}>
              <button className={classNames(
                Style.button,
                activeCategory === i ? Style.button_active : ' ')}
                style={{backgroundImage: `url(${item.image})` }}
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