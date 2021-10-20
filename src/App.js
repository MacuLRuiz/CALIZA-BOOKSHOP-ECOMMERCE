import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header/>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo!"/>

    </div>
  );
}

export default App;
