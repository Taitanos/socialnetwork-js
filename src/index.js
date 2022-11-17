import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, it's my first post", likesCounter:15},
    {id: 2, message: "Hi, how old are you?", likesCounter:15},
]

let dialogData = [
    {id: 1, name: "Alexey"},
    {id: 2, name: "Tatyana"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Alina"},
    {id: 5, name: "Ponteley"},
]

let messagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "What are you doing here?"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
]

ReactDOM.render(
    <App posts={posts} dialogData={dialogData} messagesData={messagesData}/>,
  document.getElementById('root')
);