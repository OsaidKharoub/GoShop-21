import {CartType} from './add-type';


export const AddItemsAction = (product) => {
    console.log("product : " , product)
    return{
            type: CartType.ADD_TO_CART_ITEMS,
            payload: product
    };
};

export const DeletItemsAction = (product) =>{
    console.log("product for delete :", product)
   return{
       type:CartType.DELETE_FROM_CART_ITEMS,
       payload:product
   }
}

export const DecreaseAction = ( product ) => {
    console.log('proudect for remove :' , product)
    return{
        type:CartType.DECREASE_YOUR_QUANTITY,
        payload: product
    }
}
   
