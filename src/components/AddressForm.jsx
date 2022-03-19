import React from 'react'
import {useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'

const AddressForm = ({next}) => {

 const dispatch = useDispatch()
 

  return (
    <div style={{display: 'flex', flexDirection:"column", alignItems: 'center'}}>
      <input type="text" placeholder="Full Name" onChange={(e)=>{
        dispatch({
          type:'user',
          payload:e.target.value
        })
      }} />
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Address"/>
      <input type="text" placeholder="state"/>
      <div>
         <Button>Back</Button> 
         <Button onClick={()=>next()}
          >Next</Button>
      </div>
      
    </div>
  )
}

export default AddressForm
