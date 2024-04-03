
let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: text}],
            };
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})

export default dialogsReducer;