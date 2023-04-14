let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCounter: 0,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage ={
        id: 6,
        message: state.dialogsPage.newMessageText,
    }

    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer; // паттерн observer = наблюдатель
}

export default state;