import Style from './Header.module.css'
import logo from '../../assets/img/logo.svg'
import { Container } from '../Container/Container'

export const Header = () => (
    <header className={Style.header}>
        <Container>
          <div className={Style.container}>
            <img className={Style.logo} src={logo} alt="Логотип YourMeal"/>
                    <div className={Style.wrapper}> 
                <h1 className={Style.title}>
                    <span>Только самые</span>
                    <span className={Style.red}>сочные бургеры!</span>
                </h1>
                    <p className={Style.appeal}>Бесплатная доставка от 599₽</p>
            </div>
          </div>
        </Container>
    </header>
)   