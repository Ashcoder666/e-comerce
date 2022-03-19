import React from 'react'
import {Grid,Typography,Button} from '@material-ui/core'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
const Cart = () => {
  const cart = useSelector((state)=>{
    return state.appReducer.cart
  })

  const sum = cart.reduce((sum,val)=>{
    if (val.quantity >1){
      return sum + (val.quantity *val.pages)
    }else{
      return sum + val.pages
    }
  },0)
 
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

    <div className="total-amount">
      <div className="total">
        <Typography variant="h6">
          Total Amount : {sum}
        </Typography>
      </div>
      <div className="buttons">
           <Button >back</Button> 
           <Button component={Link} to='/checkout' variant='contained' color='primary'>Next</Button> 
      </div>
    </div>
      
    </>
  )
}

export default Cart
