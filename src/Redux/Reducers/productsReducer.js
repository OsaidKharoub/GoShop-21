import {ActionTypes} from '../ActionType/actionType';

const INITIAL_STATE = {
    products: []
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_BRODUCTS :
            return {
                ...state,
                products:action.payload
            }
     default:
    return state;
    
}
}