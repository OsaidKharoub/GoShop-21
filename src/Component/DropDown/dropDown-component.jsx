import React  from "react";
import {connect} from 'react-redux';
import {addToCartSelector}  from'../../Redux/AddToCart/add-selector';
import CartItems from '../CartItems/cartItems'
import {DropDown, Button, CartItem} from './dropDown-style';
import {withRouter} from 'react-router-dom';

const Dropdown = ({className, cartItems, history}) => {
    console.log("Dropdown cartItems :", cartItems)
    return(
        <DropDown className={className}>
             <CartItem>
                 {
                   cartItems.length < 1 
                   ?
                   <h4>Your Cart Is Empty !</h4>
                   :
                     <CartItems cartItems={cartItems} />
                 }
             </CartItem>
             
             <Button onClick={() => history.push('/checkout')} >
                 <h3>Check Out</h3>
                 </Button>
         </DropDown>
    )
}
const mapStateToProps = state => ({
    cartItems: addToCartSelector(state)
})

export default withRouter(connect(mapStateToProps)(Dropdown));
