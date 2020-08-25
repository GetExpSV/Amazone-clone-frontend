import React, {useEffect, useState} from 'react'
import style from './SigninScreen.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../actions/userActions";
import {Link} from "react-router-dom";

const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push('/signin')
        }
        return () => {
        }
    }, [userInfo]);


    return <div className={style.form}>
        <form onSubmit={submitHandler}>
            <ul className={style.form_container}>
                <li>
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input type='name' name='name' id='name' onChange={e => setName(e.target.value)}/>
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
                    <label htmlFor='rePassword'>
                        RePassword
                    </label>
                    <input type='password' name='rePassword' id='rePassword' onChange={e => setRePassword(e.target.value)}/>
                </li>
                <li>
                    <button type='submit' className={style.button}>Registration</button>
                </li>
                <li>
                    Already have an account?
                </li>
                <li>
                    <Link to={'/signin'} className={style.button_full_width}>Sign-in</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default RegisterScreen;