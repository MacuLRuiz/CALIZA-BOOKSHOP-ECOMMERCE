import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <div className="App">
      <header/>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo!"/>
      <ItemCount />

    </div>
  );
}

export default App;
