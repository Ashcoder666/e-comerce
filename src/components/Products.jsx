import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product'

const Products = ({data,addToCart}) => {
  return (
    <>
      <Grid className="bottom-margin" container>
        
        {data.map(item=>(
            <Grid item key={item.title} xs={12} sm={6} md={4}>
            <Product item={item} addToCart={addToCart}/>
            </Grid>
        ))}

      </Grid>
    </>
  )
}

export default Products
