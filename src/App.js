import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Banner from './components/Banner';
import CartContextProvider, { CartContext } from './context/CartContext';




function App() {
  return (
    <div className="App">

      <CartContextProvider>
 
        <BrowserRouter>
        <header/>
        <NavBar/>
        <main id="main">
          <Switch>
          <Route exact path = '/'>
                <Banner></Banner>
                <h1>Destacados de la semana</h1>
                <ItemListContainer/>
              </Route>

              <Route exact path = '/category/:id'>
                <ItemListContainer/>
              </Route>

              <Route exact path='/item/:id'>
                <ItemDetailContainer/>
              </Route>

              <Route exact path='category/item/:id'>
                <ItemDetailContainer/>
              </Route>

          </Switch>
          </main>
        </BrowserRouter>

      </CartContextProvider>

      

    </div>
  );
}

export default App;
