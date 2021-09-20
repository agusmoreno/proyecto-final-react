import './App.css';
import { useState, createContext } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>
    <div className="App" >
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path='/cart'>   
      <Cart />
      </Route>
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
    </CartContextProvider>
  );
}

export default App;
