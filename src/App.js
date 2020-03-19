import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//Pages
import MainPage from './pages/index';
import ProductsPage from './pages/products'
import NotFoundPage from './pages/404'

function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/products' component={ProductsPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
}

export default App;
