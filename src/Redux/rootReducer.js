import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import {productsReducer} from './Reducers/productsReducer';
import {CartReducer} from './Cart/cart-reducer';
import {AddToCartReducer} from './AddToCart/add-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    allProducts: productsReducer,
    cart: CartReducer,
    cartProduct:AddToCartReducer
});

export default persistReducer(persistConfig, rootReducer);