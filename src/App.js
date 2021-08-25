import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Counter from "./components/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
      <Counter />
    </div>
  );
}

export default App;
