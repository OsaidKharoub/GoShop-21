import {CartType} from './cart-type';


export const TogelAction = (nono) => {
        console.log("status :"  + nono )
        return{
                type: CartType.TOGEL_CARD,
                payload: !nono
        };
};
