import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <header/>
      <NavBar/>
      <main id="main">
      <h1>Destacados</h1>;
      <ItemListContainer/>
      <ItemDetailContainer/>
      </main>
      

    </div>
  );
}

export default App;
