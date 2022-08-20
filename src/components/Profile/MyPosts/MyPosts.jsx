import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, it's my first post"} likesCount={15}/>
                <Post message={"Hi, how old are you?"} likesCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;