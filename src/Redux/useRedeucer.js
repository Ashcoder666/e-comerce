import {createStore,combineReducers} from 'redux'
import books from '../Lib/data'

const initialState = {
    data: books,
    cart:[]
}


const userFormstate = {
    name : ''
}


function userForm (state=userFormstate,action){
            switch(action.type){
                case 'user':{
                    return {
                        ...state,
                        name:action.payload
                    }
                }
                default:{
                    return state
                }
            }
}





function appReducer (prevstate=initialState,action){
        
    var filteredElem = prevstate.cart.filter((item)=>item.title === action.payload.title);
   
        switch(action.type){
            case 'addToCart':{
                
                if(filteredElem.length > 0){
                    const newCart = prevstate.cart.filter(item=>item.title !==action.payload.title)
                    
                   return{ ...prevstate, cart: [...newCart,{...filteredElem[0],quantity:filteredElem[0].quantity+1}]}
                }
                 if(filteredElem.length === 0){
                    return{ ...prevstate, cart: [...prevstate.cart,action.payload]}
                }
                    break
            }
            default:{
                return prevstate
            }
        }
}

const rootReducers = combineReducers({
    
     appReducer,
     userForm
}) 

const store = createStore(rootReducers)

export default store