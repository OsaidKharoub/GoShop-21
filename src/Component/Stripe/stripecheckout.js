import React from 'react';
import {Button} from './stripecheckout-style'
import SteipeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const PublishableKey = "sk_test_51J8n18GJsAzGslbVzbCiWvB3iJOWZODqmIUAE3QVJKM0AklV3ZCs0u6r6DZFWx9hjpYZP1f9QCixjtxNBTfwmLJs006z4welgH";

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');

    }

    return(
        <SteipeCheckout
        name="FackeShop Ltd."
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={PublishableKey}
        >
            <Button>Pay Now</Button>
        </SteipeCheckout>    
    )
}

export default StripeCheckoutButton;