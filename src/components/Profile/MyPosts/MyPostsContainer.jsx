import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;