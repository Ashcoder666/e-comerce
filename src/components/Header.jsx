import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,Typography } from '@material-ui/core'
import makeStyles from './headerstyle'
const Header = ({cart}) => {
    const classes = makeStyles()
  return (
    <>
    <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar>
<Typography variant="h5" >ASHBOOKS</Typography>

        </Toolbar>

        <IconButton className={classes.button}>
        <Badge badgeContent={cart.length} color='secondary' >
                 cart
              </Badge>
        </IconButton>

    </AppBar>
    </>
  )
}

export default Header
