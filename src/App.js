import React,{useEffect, useState} from 'react';
import './app.css';   
import Header from './components/Header'

import Products from './components/Products'
import Cart from './components/Cart'
import {Provider} from 'react-redux'
import store from './Redux/useRedeucer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CheckOut from './components/CheckOut'

function App() {

  



 
   
  

  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">


      <Header />
      <Routes>

      <Route path='/' element={<Products  />} />
      <Route path='/cart'  element={<Cart />} />
      <Route path='/checkout' element={<CheckOut />} />
      
      
      


      </Routes>
      
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
