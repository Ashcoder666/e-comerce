import React from 'react'
import { useSelector } from 'react-redux'
import {Typography,Divider,Button} from '@material-ui/core'

const Payment = ({next}) => {
  const cart = useSelector((state)=>{
    return state.appReducer.cart
  })
  return (
    <div>
      <div className="bottom-margin" />
      <div>
          {cart.map(item=>(
            <div key={item.title} style={{display:'flex',justifyContent: 'space-around'}}>
              <div>
              <Typography variant="body1"> {item.title} </Typography>  
              <Typography variant="body2">Quantity:{item.quantity}</Typography>
                </div>
                <div>
                <Typography variant="body2">{(item.pages)*(item.quantity)}$</Typography>
                </div>
            </div>
          ))}

          <div style={{textAlign:"center",paddingBottom:'60px'}}>
            <Divider />
            <Typography variant="h5" >Card information</Typography>
            <input  placeholder="1234 xxxx xxxx xxxx xxxx" /> <input placeholder="MM/YYYY"/>< input placeholder="CVC"/>
          </div>
          <div style={{textAlign:"center",paddingBottom:'60px'}}>
            <Button variant="outlined" size='large' color='secondary'>Back</Button>
            <Button variant="contained" onClick={()=>{next()}} size='large' color='primary'>Pay</Button>
          </div>
      </div>
    </div>
  )
}

export default Payment
