import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, it's my first post"} likesCount={15}/>
                <Post message={"Hi, how old are you?"} likesCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;