import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
        
          <Route path="/shop">
            <Shop />
          </Route>
         
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/review">
            <Review />
          </Route>
          
          <Route path="/inventory">
            <Inventory />
          </Route>
        
          <Route path="/product/:productKey">
            <ProductDetail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
