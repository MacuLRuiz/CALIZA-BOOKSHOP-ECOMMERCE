import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
      <header/>
      <NavBar/>
      <main id="main">
        <Switch>
        <Route exact path = '/'>
              <h1>Destacados de la semana</h1>
              <ItemListContainer/>
            </Route>

            <Route exact path = '/categoria/:id'>
              <ItemListContainer/>
            </Route>

            <Route exact path='/producto/:productoId'>
              <ItemDetailContainer/>
            </Route>

        </Switch>
        </main>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
