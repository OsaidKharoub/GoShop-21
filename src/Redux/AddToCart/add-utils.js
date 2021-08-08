export const  allItems =  (cartItems, cartItemsToAdd) => {
    const item = cartItems
    console.log("cartItems :",item)
   const exsttingCartItem =  cartItems.find(cart => cart.item.id === cartItemsToAdd.id )
   console.log('exsttingCartItem :', exsttingCartItem );

  if(exsttingCartItem){
    
       return cartItems.map( cartItem => 
           cartItem.item.id === cartItemsToAdd.id 
           ?
           {...cartItem, quantity: cartItem.quantity + 1 }
           : 
           cartItem

       )
   }

   return[...cartItems, {item: cartItemsToAdd, quantity: 1}]

}


export const decrease = (cartItems, cartItemsToDelet) => {
    const exsit = cartItems.find(cart => cart.item.id === cartItemsToDelet.id)

        if(exsit.quantity === 1){
            return cartItems.filter(cart => cart.item.id !== cartItemsToDelet.id)
        }
        return cartItems.map(cart => 
            cart.item.id === cartItemsToDelet.id
            ?
            {...cart, quantity: cart.quantity - 1 }
            :
            cart
            )
   
  
}

