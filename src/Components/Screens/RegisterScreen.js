import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import img from '../../Images/d1.jpg'
import style from './SigninScreen.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../../actions/userActions";

const RegisterScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin)
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if(userInfo){
            props.history.push('/')
        }
        return () => {
        }
    }, [userInfo]);


    return <div className={style.form}>
        <form onSubmit={submitHandler}>
            <ul className={style.form_container}>
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)}/>
                </li>
                <li>
                    <button type='submit' className={style.button}>Sign in</button>
                </li>
                <li>
                    New to amazona?
                </li>
                <li>
                    <Link to={'/register'} className={style.button_full_width}>Create your amazona account</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default RegisterScreen;