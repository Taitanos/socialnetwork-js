import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src={'https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10109073-stock-photo-flower-logo.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Message</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Setting</a></div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src={'https://images.unsplash.com/photo-1616555846456-6d53b92669a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    new post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
