import {createStore} from 'redux'
import books from '../Lib/data'

const initialState = {
    data: books,
    cart:[]
}


function appReducer (prevstate=initialState,action){
        switch(action.type){
            case 'addToCart':return{
                ...prevstate,
                cart: [...prevstate.cart,action.info]
            }
            default:{
                return prevstate
            }
        }
}

const store = createStore(appReducer)

export default store