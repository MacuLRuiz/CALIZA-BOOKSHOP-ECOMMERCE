import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "./styles.css";
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Banner from './components/Banner';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">

      <CartContextProvider>
 
        <BrowserRouter>
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
              
              <Route exact path='/Cart'>
                <Cart/>
              </Route>

              <Route exact path='/BuyerForm'>
                <UserForm/>
              </Route>

          </Switch>
          </main>
        </BrowserRouter>

      </CartContextProvider>

    </div>
  );
}

export default App;
