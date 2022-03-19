import React from 'react'
import {Stepper,Step,Paper,Typography, StepLabel} from '@material-ui/core'
import {useSelector} from 'react-redux'
import AddressForm from './AddressForm'
import Payment from './Payment'


const CheckOut = () => {
  const [activeStep,setActiveStep] = React.useState(0)
    const steps = ["shipping Address", "Payment Details"]
    const next = ()=>{
      setActiveStep(prev=>prev+1)
    }

    const user = useSelector((state)=>{
      return state.userForm.name
    })
  



const Forms = ()=>activeStep === 0 
    ? <AddressForm next={next}/>
    : <Payment next={next}/>
const Confirmation = ()=>(
  <div style={{textAlign:"center",paddingTop:'60px'}} >
    Thank you for your Purchase! {user}
  </div>
)

  return (
    <>
      <div  className="bottom-margin"   />
      <main>
        <Paper>
<Typography variant="h6">CheckOut</Typography>
    <Stepper>
      {steps.map((step)=>(
        <Step key={step}>
          <StepLabel>
            {step}
          </StepLabel>
        </Step>
      ))}
    </Stepper>

    {activeStep === steps.length ? <Confirmation /> : <Forms />}


        </Paper>

      </main>

     
    </>
  )
}

export default CheckOut
