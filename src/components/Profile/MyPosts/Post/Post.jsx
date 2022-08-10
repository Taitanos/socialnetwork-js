import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src={"https://bipbap.ru/wp-content/uploads/2021/09/89-7.jpg"}/>
            Post
        </div>
    )
}

export default Post;