import React from 'react';
import {Container,Detalis,DetalisImg,Break,
        DetalisDesc,TitleProduct,MainLapel,
        Label,Category,Decrip,Cart,CartIcon,AddCart} from './detalisProduct-style'
import {connect} from 'react-redux';
import {selectorProducts} from '../../Redux/selector/product-selector';
import {withRouter} from 'react-router-dom';
import {AddItemsAction} from '../../Redux/AddToCart/add-action';
import EmblaCarousel from '../EmblaSlider/EmbalCarousel';





const DetalisProduct = ({products, match, AddItemsAction, AddNotify}) => {

    console.log("products", products);
    const productId = parseInt(match.params.productId);
    console.log("my tyoe is : " , typeof(productId));
    console.log("my tyoe is : " , productId);
    const product = products.filter(fil => fil.id === productId)[0];
    console.log("AddItemsAction", AddItemsAction);

    if (!product) {
        return <></>;
    }

    return(
        <Container key={product.id}>
            <Detalis>
                <DetalisImg>
                    <img src={product.image} alt="product" />
                </DetalisImg>
                <Break>and</Break>
                <DetalisDesc>
                    <TitleProduct>{product.title}</TitleProduct>
                    <MainLapel>
                        <Label>
                            <h2>${product.price}</h2>
                        </Label>
                    </MainLapel>
                    <Category>
                            <h3>{product.category}</h3>
                    </Category>
                    <Decrip>{product.description}</Decrip>
                    <Cart onClick={() => {AddItemsAction(product); AddNotify()} } >
                        <CartIcon><i className="fa fa-shopping-cart"></i></CartIcon>    
                        <AddCart><h3>Add to cart</h3></AddCart>
                    </Cart>
                </DetalisDesc>
            </Detalis>
            <EmblaCarousel product={product}  AddNotify={AddNotify}/>
        </Container>
        )
}

const mapStateToProps = (state) => ({
    products: selectorProducts(state)
})      

const mapDispatchToProps = dispatch => ({
    AddItemsAction: (product) => dispatch(AddItemsAction(product)) 
})
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DetalisProduct));