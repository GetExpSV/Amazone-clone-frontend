import React from 'react'
import {Link} from "react-router-dom";
import img from '../../Images/d1.jpg'
import style from './ProductScreen.module.sass'

function ProductScreen(props) {
    let data;
    const product = data.products.find(p => p._id === props.match.params.id);
    console.log(product)
    return (<div>
        <div className={style.back_to_result}>
            <Link to='/'>Back to result</Link>
        </div>
        <div className={style.details}>
            <div className={style.details_image}>
                <img src={img} alt={'product image'}/>
            </div>
            <div className={style.details_info}>
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className={style.details_action}>
                <ul>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className={style.button}>Add to Cart</button>
                    </li>
                </ul>
            </div>

        </div>
    </div>)
}

export default ProductScreen;