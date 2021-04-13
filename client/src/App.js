import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/products" component = {Products} />
          <Route path="/contacts" component = {Contact} />
          <Route path='/register' component = {Register} />
          <Route path='/login' component = {Login} />
          <Route path='/checkout' component= {Checkout} />
          <Route path='/cart' component= {Cart} />
        </Switch>
      </div>
    );
  }
}

export default App;