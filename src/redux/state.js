let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, it's my first post", likesCounter: 15},
            {id: 2, message: "Hi, how old are you?", likesCounter: 15},
        ],
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
    },
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 3,
        message: postMessage,
        likesCounter: 0,
    }

    state.profilePage.posts.push(newPost);
}

export default state;