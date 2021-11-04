import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
 
      <Router>
      <header/>
      <NavBar/>
      <main id="main">
      <h1>Destacados</h1>
        <Switch>
        <Route exact path = '/'>
              <ItemListContainer/>
            </Route>

            <Route exact path = '/categoria/:id'>
              <ItemListContainer/>
            </Route>

            <Route exact path='/producto/:productoId'>
              <ItemDetailContainer/>
            </Route>

          {/* <ItemDetailContainer/> */}
        </Switch>
        </main>
      </Router>

      

    </div>
  );
}

export default App;
