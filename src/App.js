import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App" >
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>   
      <ItemListContainer greeting="Bienvenidos!" />
      </Route>
      <Route exact path='/category/:category'>
      <ItemListContainer greeting="Bienvenidos!" />
      </Route>
      <Route exact path='/item/:id'>
      <ItemDetailContainer />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
