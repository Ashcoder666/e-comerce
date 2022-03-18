import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product'
import {useSelector} from 'react-redux'

const Products = () => {
  const data = useSelector((state) =>{
    return state.data
})
  return (
    <>
      <Grid className="bottom-margin" container>
        
        { data && data.map(item=>(
            <Grid item key={item.title} xs={12} sm={6} md={4}>
            <Product item={item} />
            </Grid>
        ))}

      </Grid>
    </>
  )
}

export default Products
