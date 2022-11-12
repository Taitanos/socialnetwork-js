import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        {id: 1, message: "Hi, it's my first post", likesCounter:15},
        {id: 2, message: "Hi, how old are you?", likesCounter:15},
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCounter} id={postsData[0].id}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCounter} id={postsData[1].id}/>

            </div>
        </div>
    )
}

export default MyPosts;