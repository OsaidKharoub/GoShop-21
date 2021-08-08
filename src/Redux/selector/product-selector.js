import {createSelector} from 'reselect';


const products = state => state.allProducts;


export const selectorProducts = createSelector(
    [products],
    allProducts => allProducts.products);