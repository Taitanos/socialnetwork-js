import React from "react";
import s from "./Header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <img
                src={'https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10109073-stock-photo-flower-logo.jpg'}/>
        </header>
    )
}

export default Header;