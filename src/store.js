import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {productDetailsReducer, productListReducer} from "./Reducers/productListReducer";
import thunk from 'redux-thunk';
import {cartReducer} from "./Reducers/cartReducers";
import Cookie from 'js-cookie'
import {userSigninReducer} from "./Reducers/userReducers";

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {cart: {cartItems}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;