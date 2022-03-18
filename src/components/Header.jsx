import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,Typography } from '@material-ui/core'
import makeStyles from './headerstyle'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Header = () => {
  const state= useSelector((state)=>{
    return state.cart
  })
    const classes = makeStyles()
  return (
    <>
    <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar>
<Typography variant="h5" component={Link} to='/' color="secondary" style={{textDecoration: 'none'}}>ASHBOOKS</Typography >

        </Toolbar>

        <IconButton className={classes.button}  component={Link} to='/cart'>
        <Badge badgeContent={state.length} color='secondary' >
                 cart
              </Badge>
        </IconButton>

    </AppBar>
    </>
  )
}

export default Header
