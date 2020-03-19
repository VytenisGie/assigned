import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import MainPage from './pages/index';
import ProductsPage from './pages/products'
import PreviewPage from './pages/preview';
import EditPage from './pages/edit';
import CreatePage from './pages/create';
import NotFoundPage from './pages/404'

function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/products' component={ProductsPage}/>
      <Route exact path='/products/:id' component={PreviewPage}/>
      <Route exact path='/products/:id/edit' component={EditPage}/>
      <Route exact path='/create' component={CreatePage}/>
      <Route exaxt path='/404' component={NotFoundPage} />
      <Redirect to='/404'/>
    </Switch>
  </Router>
}

export default App;
