import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: "Hi, it's my first post", likesCounter:15},
        {id: 2, message: "Hi, how old are you?", likesCounter:15},
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCounter} id={p.id}/>)

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;