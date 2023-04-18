const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, it's my first post", likesCounter: 15},
                {id: 2, message: "Hi, how old are you?", likesCounter: 15},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: "Alexey"},
                {id: 2, name: "Tatyana"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Alina"},
                {id: 5, name: "Ponteley"},
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "What are you doing here?"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            newMessageText: "That's good idea"
        },
    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; // паттерн observer = наблюдатель
    },

    dispatch (action) { // (action должен всегда иметь тип, например - type:'ADD_POST')
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCounter: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage ={
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store;

//store - ООП