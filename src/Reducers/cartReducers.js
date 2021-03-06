import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";

const cartReducer = (state = {cartItems:[]}, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(n=> n.product === item.product);
            if(product){
                return{
                    cartItems: state.cartItems.map(n=>n.product === product.product? item : n)
                }
            }
            return{
                cartItems: [...state.cartItems, item]
            };

        case CART_REMOVE_ITEM:
            return {cartItems: state.cartItems.filter(n=>n.product !== action.payload)};

        default: return state
    }
};

export {cartReducer}