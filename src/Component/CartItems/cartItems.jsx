import React  from 'react';
import { Product, Image, Info, Price} from './cartItems-style'

const CartItems = ({cartItems}) => {
    console.log("cartItems :", cartItems);
    if (!cartItems) {
        return <></>;
    }

   const Items =  cartItems.map(cartItem => {
       const item = cartItem.item;
       const qty = cartItem.quantity;

        return(
            <Product key={item.id}>
                <Image>
                <img src={item.image} alt="product" />
                </Image>
                <Info>
                <h3>{item.title}</h3>
            <Price>
            <h5>${item.price}</h5>
            <span>X</span>
            <h5>{qty}</h5>
            </Price>
             
                </Info>
            </Product>
        )
    })
    return <>{Items}</>
}
export default CartItems;