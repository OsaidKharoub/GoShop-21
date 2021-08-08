import {ActionTypes} from '../ActionType/actionType';

export const setProducts = (products) => {
  console.log(products)
    return {
      type: ActionTypes.SET_BRODUCTS,
      payload: products,
    };
  };