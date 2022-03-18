import React from 'react'
import {Card , CardMedia , CardContent ,CardActions , Typography ,IconButton} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'

const Product = ({item}) => {
    
    const dispatch = useDispatch()
   
  return (
    <>
     <Card style={{margin:'10px'}}>
        <CardMedia image={item.images} style={{ height: 0,paddingTop: '56.25%',}}/>
        <CardContent>
            <div>
                <Typography variant="h6" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="h6">
                   $ {item.pages}
                </Typography>
                


            </div>

            <Typography variant="body2">
               Author: {item.author} <br />
               languages: {item.language}
            </Typography>

        </CardContent>

        <CardActions>
            <IconButton onClick={()=>{
                dispatch({
                    type: 'addToCart',
                    info: item
                })
            }}>
                +
            </IconButton>
        </CardActions>
            
          
         
         </Card> 
    </>
  )
}

export default Product
