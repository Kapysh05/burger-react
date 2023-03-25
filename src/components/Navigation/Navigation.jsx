import { Container } from '../Container/Container'
import Style from './Navigation.module.css'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

export const Navigation = () => {

    const { category } = useSelector((state) => state.category)

    return (
    <nav className={Style.navigation}>
      <Container className={Style.container}>
        <ul className={Style.list}>
          {category.map((item, i) => 
            <li className={Style.item}>
              <button className={Style.button_active}>
              {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
    )
}