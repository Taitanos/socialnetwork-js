import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, it\'s my first post', likesCounter: 15},
                {id: 2, message: 'Hi, how old are you?', likesCounter: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: 'Alexey'},
                {id: 2, name: 'Tatyana'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Alina'},
                {id: 5, name: 'Ponteley'},
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What are you doing here?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: ''
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн observer = наблюдатель
    },

    dispatch(action) { // (action должен всегда иметь тип, например - type:'ADD_POST')

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

//store - ООП