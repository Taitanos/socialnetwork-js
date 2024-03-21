import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>
        , document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})