import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';

function MyPostsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (text) => {
                        store.dispatch(updateNewPostActionCreator(text))
                    }

                    return <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;