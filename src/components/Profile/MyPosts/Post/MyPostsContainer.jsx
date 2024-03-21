import React from 'react';
import MyPosts from '../MyPosts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/profileReducer';

function MyPostsContainer(props) {

    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
        />
    )
}

export default MyPostsContainer;