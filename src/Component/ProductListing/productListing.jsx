import React , {useEffect} from "react" ;
import axios from "axios";
import {setProducts} from '../../Redux/Actions/ProductsAction';
import {connect} from 'react-redux';
import ProductComponent from '../ProductComponent/productComponent';
import {ListProudect} from './productListing-style';

const ProductPage = ({setProducts , AddNotify}) => {
  
    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response)
            setProducts(response.data)
        } )
        .catch((err) => {
          console.log("Err: ", err);
        });     
    })
   
    return(
        <ListProudect>
          <ProductComponent AddNotify={AddNotify}/>
        </ListProudect>
    )
}

const mapDispatchToProps = dispatch =>({
    setProducts: (products) => dispatch(setProducts(products))
})

export default connect(null,mapDispatchToProps)(ProductPage);