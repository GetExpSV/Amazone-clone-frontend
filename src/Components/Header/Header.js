import React from 'react'
import style from './Header.module.sass'

const Header = () => {
    return (<header className={style.header}>
        <a href={'#'}>Amazona</a>
        <a href={'#'}>Cart</a>
        <a href={'#'}>Sign In</a>
    </header>);
}

export default Header;