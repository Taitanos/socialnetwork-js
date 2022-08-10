import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://t3.ftcdn.net/jpg/01/72/84/00/360_F_172840094_eF1Cx8vBfuGBHcSqImum8af0iX2YrUUM.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;