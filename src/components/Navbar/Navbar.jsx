import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.navContent}>
                <div className={s.item}>
                    <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/setting'} activeClassName={s.activeLink}>Setting</NavLink>
                </div>
            </div>
            <div className={s.navFriends}>
                <div className={s.item}>
                    {/*<NavLink to={'/friends'} activeClassName={s.activeLink}>Friends</NavLink>*/}
                    <div className={s.friends}> Friends
                        {/*Прокинуть аватарки друзей*/}
                        <div>
                            <img src={"https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"} alt={"Avatar"}/>
                            <img src={"https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"} alt={"Avatar"}/>
                            <img src={"https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"} alt={"Avatar"}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;