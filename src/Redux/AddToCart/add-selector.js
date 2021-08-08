import {createSelector} from "reselect";

const AddItems = state => state.cartProduct

export const addToCartSelector = createSelector(
    [AddItems],
    cartProduct => cartProduct.cartItems
    );

export const sotalSelector = createSelector([AddItems],
    cartProduct => cartProduct.total
    );