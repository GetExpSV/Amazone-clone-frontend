import './App.module.sass';
import style from './App.module.sass'
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import ProductScreen from "./Components/Screens/ProductScreen";
import React from "react";
import CartScreen from "./Components/Screens/CartScreen";
import SigninScreen from "./Components/Screens/SigninScreen";
import {useSelector} from "react-redux";
import RegisterScreen from "./Components/Screens/RegisterScreen";
import ProductsScreen from "./Components/Screens/ProductsScreen";

function App() {

    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo} = userSignin;

    const openMenu = () => {
        document.querySelector(`.${style.sidebar}`).classList.add(style.open)
    }

    const closeMenu = () => {
        document.querySelector(`.${style.sidebar}`).classList.remove(style.open)
    }

    return (<BrowserRouter>
        <div className={style.grid_container}>
            <header className={style.header}>
                <div className={style.brand}>
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to='/'>Amazona</Link>
                </div>
                <div className={style.header_links}>
                    <Link to={'/cart'}>Cart</Link>
                    {
                        userInfo ? <Link to={'/profile'}>{userInfo.name}</Link> :
                            <Link to={'/signin'}>Sign In</Link>
                    }

                </div>
            </header>
            <aside className={style.sidebar}>
                <h3>Shopping Categories</h3>
                <button onClick={closeMenu} className={style.button_close}>x</button>
                <ul>
                    <li>
                        <a href={'#'}>Pants</a>
                    </li>
                    <li>
                        <a href={'#'}>Shirts</a>
                    </li>
                </ul>
            </aside>
            <main className={style.main}>
                <div className={style.content}>
                    <Route path={'/products'} component={ProductsScreen}/>
                    <Route path={'/register'} component={RegisterScreen}/>
                    <Route path={'/signin'} component={SigninScreen}/>
                    <Route path={'/product/:id'} component={ProductScreen}/>
                    <Route path={'/cart/:id?'} component={CartScreen}/>
                    <Route exact path={'/'} component={HomeScreen}/>
                </div>
            </main>
            <footer className={style.footer}>
                All right reserved.
            </footer>
        </div>
    </BrowserRouter>);
}

export default App;
