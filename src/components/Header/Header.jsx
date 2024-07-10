import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img
                src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324'} alt={'logo'}/>

                <div className={s.loginBlock}>
                    {props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;