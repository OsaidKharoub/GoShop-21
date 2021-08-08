import {CartType} from './add-type';
import {allItems, decrease} from './add-utils';

const INITIAL_STATE = {
    cartItems: [],
    total: 0.00
}

export const AddToCartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartType.ADD_TO_CART_ITEMS:
            return { 
                ...state,
                cartItems: allItems(state.cartItems, action.payload),
                total: parseFloat((state.total + action.payload.price).toFixed(2))
            } 
            
        case CartType.DELETE_FROM_CART_ITEMS:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.item.id !== action.payload.item.id ),
                total: parseFloat((state.total - (action.payload.item.price * action.payload.quantity)).toFixed(2)) 
            
            } 
       case CartType.DECREASE_YOUR_QUANTITY:
           return{
               ...state,
               cartItems: decrease(state.cartItems, action.payload),
               total: parseFloat((state.total - action.payload.price).toFixed(2))
           }
    default:
    return state;
    }
}