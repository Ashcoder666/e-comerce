import React from 'react'
import {Card, CardContent , CardActions, CardMedia, Typography} from '@material-ui/core'

const CartItem = ({item}) => {
  return (
    <>
     <div className="bottom-margin" />
    <Card style={{margin:'0 5px'}}>
        <CardMedia image={item.images} alt={item.title} style={{height:0,paddingBottom: '96.25%'}} />
       
        <CardContent>
            <Typography variant="h6">
            {item.title}
            </Typography>
            <Typography variant="h6">{item.pages}$</Typography>
            <Typography variant="body1">quantity:{item.quantity}</Typography>
        </CardContent>
    </Card>
      
    </>
  )
}

export default CartItem
