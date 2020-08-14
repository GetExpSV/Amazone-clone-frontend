import React, {useEffect} from 'react'
import style from "../../App.module.sass";
import img from '../../Images/d1.jpg'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../actions/productActions";

function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
        }
    }, []);

    return loading ? <div>Loading....</div> :
        error ? <div>{error}</div> :
            <ul className={style.products}>
                {
                    products.map(p =>
                        <li key={p._id}>
                            <div className={style.product}>
                                <Link to={'/product/' + p._id}><img src={img} alt={'product'}/></Link>
                                <div className={style.product_name}>
                                    <Link to={'/product/' + p._id}>{p.name}</Link>
                                </div>
                                <div className={style.product_brand}>{p.brand}</div>
                                <div className={style.product_price}>${p.price}</div>
                                <div
                                    className={style.product_rating}>{p.rating} stars({p.numReviews} reviews)
                                </div>
                            </div>
                        </li>)
                }
            </ul>
}

export default HomeScreen