import { Provider } from "react-redux"
import { Catalog } from "./components/Catalog/Catalog"
import { Container } from "./components/Container/Container"
import { Header } from "./components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation"
import { Store } from "./Store"


export const App = () => {

  return (
    <Provider store={Store}>
      <Header />
    <main>
      <Navigation />
      <Catalog />
    </main>
    <footer></footer>
    </Provider>
  )
}