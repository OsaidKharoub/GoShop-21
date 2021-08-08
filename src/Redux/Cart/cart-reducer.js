import {CartType} from './cart-type';

const INITIAL_STATE = {
    togel: false
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartType.TOGEL_CARD:
            return {
                ...state,
                togel:action.payload
            }   
    default:
    return state;
    }
}