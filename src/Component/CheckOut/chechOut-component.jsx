import React from 'react';
import {Padding,CheckOutContainer, CheckoutHeader,Empty, CheckOutContent,Image, Quantity, Total} from './checkOut-style';
import {connect} from 'react-redux';
import {addToCartSelector, sotalSelector} from '../../Redux/AddToCart/add-selector';
import {AddItemsAction,DeletItemsAction, DecreaseAction} from '../../Redux/AddToCart/add-action';
import StripeCheckoutButton from '../Stripe/stripecheckout'



const CheckOut = ({Items, delet, increas, decrease, total ,RemoveNotify, QunatityNotify}) => {
    console.log("Total :", total)
    console.log("Items:",Items)
    return(
        <Padding>
        <CheckOutContainer>
            <CheckoutHeader>
                <h4>product</h4>
                <h4>description</h4>
                <h4>quntity</h4>
                <h4>price</h4>
                <h4>total</h4>
                <h4>remove</h4>
            </CheckoutHeader>
            {
                Items.length < 1 ?
                <Empty>Empty !!</Empty>
                :
                Items.map(itm => {
                    return(
                        <CheckOutContent key={itm.item.id}>
                            <Image>
                            <img src={itm.item.image} alt="product"/>
                            </Image>
                            <h4>{itm.item.title}</h4>
                            <Quantity> 
                            <span onClick={() => {decrease(itm.item);
                                                itm.quantity === 1 
                                                ? 
                                                RemoveNotify()
                                                :
                                                QunatityNotify()}} className="pointer"><i className="fa fa-chevron-left"></i></span>
                                {itm.quantity}
                            <span onClick={() => {increas(itm.item);
                                                  QunatityNotify()}} className="pointer"><i className="fa fa-chevron-right"></i></span>    
                            </Quantity>
        
                            <h4>${itm.item.price}</h4>
                            <h4>${itm.quantity * itm.item.price}</h4>
                            <h4 onClick={() => { delet(itm);
                                                 RemoveNotify() }} className="pointer">
                                X
                            </h4>
                        </CheckOutContent>
                    )
                })
            }
            <Total>
                <h2> Total :
                    {total === 0 ?
                    <span className="empty">${total}</span>
                    :
                    <span>${total}</span>
                    }
                      </h2>
                           
                <StripeCheckoutButton price={total} className="stripe"/>
            </Total>
           
       </CheckOutContainer>
        </Padding>

    )
}

const mapStateToProps = state => ({
    Items:addToCartSelector(state),
    total:sotalSelector(state)
})
const mapDispatchToProps = dispatch => ({
    delet: item => dispatch(DeletItemsAction(item)),
    increas : item => dispatch(AddItemsAction(item)),
    decrease: item => dispatch(DecreaseAction(item))
})  


export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);