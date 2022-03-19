import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'
const Cart = () => {
  const cart = useSelector((state)=>{
    return state.cart
  })
  console.log(cart)
  return (
    <>
    <Grid container >

       {cart &&
         cart.map(item=>(
           
           <Grid item key={item.title} xs={12} sm={6} md={4} >
             <CartItem item={item}/>
           </Grid>
         ))
       }

    </Grid>
      
    </>
  )
}

export default Cart
