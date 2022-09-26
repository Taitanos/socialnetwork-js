import React from "react";
import s from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div><a href={'profile'}>Profile</a></div>
            <div><a href={'dialog'}>Message</a></div>
            <div><a href={'news'}>News</a></div>
            <div><a href={'music'}>Music</a></div>
            <div><a href={'setting'}>Setting</a></div>
        </nav>
    )
}

export default Navbar;