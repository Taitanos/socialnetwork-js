import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCounter} id={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch ({type: 'ADD-POST'});
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch ({type:'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={s.textArea} onChange={onPostChange}
                              ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;