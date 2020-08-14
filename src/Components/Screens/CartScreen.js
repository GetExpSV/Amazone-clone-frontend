import React, {useEffect} from 'react';
import {addToCart, cartActions, removeFromCart} from "../../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import style from './CartScreen.module.sass'
import img from '../../Images/d1.jpg'
import {Link} from "react-router-dom";

const CartScreen = (props) => {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const checkoutHandler = () => {
        props.history.push('/signing?redirect=shipping')
    }

    return (<div className={style.cart}>
        <div className={style.cart_list}>
            <ul className={style.cart_list_container}>
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {cartItems.length === 0 ?
                    <div>
                        Cart is Empty
                    </div> :
                    cartItems.map(n => <li>
                        <div className={style.cart_image}>
                            <img src={img} alt={'product iage'}/>
                        </div>
                        <div className={style.cart_name}>
                            <div>
                                <Link to={'/product/' + n.product}>
                                    {n.name}
                                </Link>

                            </div>
                            <div>
                                Qty:
                                <select value={n.qty}
                                        onChange={(e) => dispatch(addToCart(n.product, e.target.value))}>
                                    {
                                        [...Array(n.countInStock).keys()].map(n => <option
                                            value={n + 1}>{n + 1}</option>)
                                    }
                                </select>
                                <button type={'button'} onClick={() => removeFromCartHandler(n.product)}
                                        className={style.button}>
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className={style.cart_price}>
                            ${n.price}
                        </div>
                    </li>)
                }
            </ul>
        </div>
        <div className={style.cart_action}>
            <h3>
                Subtotal ( {cartItems.reduce((a, b) => a + b.qty, 0)} items)
                : $ {cartItems.reduce((a, b) => a + b.price * b.qty, 0)}
            </h3>
            <button onClick={checkoutHandler} className={style.button_primary} disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>

    </div>);

}

export default CartScreen;