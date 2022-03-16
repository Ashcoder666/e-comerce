import React from 'react'
import {Grid,Typography} from '@material-ui/core'
const Cart = ({cart}) => {
  return (
    <>
    <Grid container>

        {cart && 
       cart.map(item=> (
           <Grid item key={item.title}>
               {item.title}
           </Grid>
       ))}

    </Grid>
      
    </>
  )
}

export default Cart
