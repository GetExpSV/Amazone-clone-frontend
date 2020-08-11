import React from 'react'
import style from "../../App.module.sass";
import data from "../../data";
import p1 from "../../Images/p1.jpg";
import {Link} from "react-router-dom";

function HomeScreen() {
    return (<ul className={style.products}>
        {
            data.products.map(p =>
                <li>
                    <div className={style.product}>
                        <Link to={'/product/'+ p._id}><img src={p.image} alt={'product'}/></Link>
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
    </ul>)
}

export default HomeScreen