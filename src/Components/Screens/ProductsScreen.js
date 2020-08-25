import React, {useEffect, useState} from 'react'
import style from './ProductsScreen.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, listProducts, saveProduct} from "../../actions/productActions";

const ProductsScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const productList = useSelector(state => state.productList)
    const {loading, products, error} = productList;
    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const productDelete = useSelector(state=>state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({_id: id, name, price, image, brand, category, countInStock, description}))
    }

    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
        }
    }, [successSave, successDelete]);

    const deleteHandler = (product) =>{
        dispatch(deleteProduct(product._id))
    }

    const openModal = (product) => {
        setModalVisible(!modalVisible);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setDescription(product.description);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setRating(product.rating);
        setNumReviews(product.numReviews)
    }

    return <div className={style.content_margined}>
        <div className={style.product_header}>
            <h3>Products</h3>
            <button onClick={() => openModal({})} className={style.button}>Create Product</button>
        </div>
        {modalVisible &&
        <div className={style.form}>
            <form onSubmit={submitHandler}>
                <ul className={style.form_container}>
                    <li>
                        <h2>Create Product</h2>
                    </li>
                    <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input type='text' value={name} name='name' id='name' onChange={(e) => setName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='price'>
                            Price
                        </label>
                        <input type='text' value={price} name='price' id='price' onChange={(e) => setPrice(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='image'>
                            Image
                        </label>
                        <input type='text' value={image} name='image' id='image' onChange={(e) => setImage(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='brand'>
                            Brand
                        </label>
                        <input type='text' value={brand} name='brand' id='brand' onChange={(e) => setBrand(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='category'>
                            Category
                        </label>
                        <input type='text' value={category} name='category' id='category' onChange={(e) => setCategory(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='description'>
                            Description
                        </label>
                        <textarea name='description' value={description} id='description' onChange={(e) => setDescription(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor='countInStock'>
                            Count In Stock
                        </label>
                        <input type='text' value={countInStock} name='countInStock' id='countInStock'
                               onChange={(e) => setCountInStock(e.target.value)}/>
                    </li>
                    <li>
                        <button type='submit' className={style.button}>{id ? 'Update' : 'Create'}</button>
                    </li>
                    <li>
                        <button type='button' onClick={()=>setModalVisible(false)} className={style.button_secondary}>Back</button>
                    </li>
                </ul>
            </form>
        </div>}
        <div className={style.product_list}>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map(n => <tr>
                    <td>{n._id}</td>
                    <td>{n.name}</td>
                    <td>{n.price}</td>
                    <td>{n.category}</td>
                    <td>{n.brand}</td>
                    <td>
                        <button onClick={() => openModal(n)} className={style.button}>Edit</button>
                        {' '}
                        <button onClick={() => deleteHandler(n)} className={style.button}>Delete</button>
                    </td>
                </tr>)}

                </tbody>
            </table>
        </div>
    </div>

}

export default ProductsScreen;