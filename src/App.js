import React,{useEffect, useState} from 'react';
import './app.css';   
import Header from './components/Header'
import books from './Lib/data'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  const [data,setData] =useState (books)
  const [cart,setCart] = useState ([])
  const [realCart,setRealCart] = useState([])

 const addToCart = (item)=>{
   

   setCart(prev=>[...prev,{...item,quantity:1}])
   

    
 }

 useEffect(()=>{
   if(cart){
   localStorage.setItem('books', JSON.stringify(cart))
   const ls= localStorage.getItem('books')
   const parsed = JSON.parse(ls)
   setRealCart(parsed)
 
   }
   
  
 },[cart])
 console.log(cart)
  return (
    <div className="App">
      <Header cart={cart}/>
      <Products data={data} addToCart={addToCart}/>
      <Cart cart={realCart}/>
    </div>
  );
}

export default App;
