import React from 'react';
import {connect} from 'react-redux';
import {selectorProducts} from '../../Redux/selector/product-selector';
import {AddItemsAction} from '../../Redux/AddToCart/add-action';
import { Link } from 'react-router-dom';
import {Product, Image, Description, Title, Price, KindProduct, BottomSection ,Cart, CartIcon, AddCart } from './product-style';



const ProductComponent = ({products, AddItemsAction, AddNotify}) => {
   
    
   const renderList =  products.map(product => {
        return(
            <Product key={product.id}   >
                <Link to= {`/product/${product.id}`}>
                <Image>
                 <img src={product.image} alt="product"/>
                </Image> 
                </Link>
                <Description>
                <Title>{product.title}</Title>
                <BottomSection>
                    <div>
                    <Price>$ {product.price}</Price>
                    <KindProduct>{product.category}</KindProduct>
                    </div>
                    <Cart onClick={() => {AddItemsAction(product); AddNotify()} } >
                        <CartIcon><i className="fa fa-shopping-cart"></i></CartIcon>    
                        <AddCart><h3>Add to cart</h3></AddCart>
                    </Cart>
                </BottomSection>
                    
               
                </Description>
      
            </Product>
           
        )
    });
    return <>{renderList}</>;
  
}

const mapStateToProps = state => ({
products: selectorProducts(state)
});
const mapDispatchToProps = dispatch => ({
    AddItemsAction: (product) => dispatch(AddItemsAction(product)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);