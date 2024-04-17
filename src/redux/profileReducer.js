let initialState = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first post', likesCounter: 15},
        {id: 2, message: 'Hi, how old are you?', likesCounter: 15},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, message: state.newPostText, likesCounter: 0}],
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile})
export const updateNewPostActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;