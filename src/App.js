import styles from "./styles.css"
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <div className="App">
      <header/>
      <NavBar/>
      <main id="main">
      <h1>hi</h1>;
      <ItemListContainer/>
      </main>
      

    </div>
  );
}

export default App;
