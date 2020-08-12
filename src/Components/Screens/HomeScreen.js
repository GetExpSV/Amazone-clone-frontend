import React, {useEffect, useState} from 'react'
import style from "../../App.module.sass";
import img from '../../Images/d1.jpg'
import axios from 'axios'
import {Link} from "react-router-dom";

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data)
        };
        fetchData();
        return () =>{}
    }, []);
    return (<ul className={style.products}>
        {
            products.map(p =>
                <li>
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
    </ul>)
}

export default HomeScreen