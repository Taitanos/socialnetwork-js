import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header>
                <img
                    src={"https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10109073-stock-photo-flower-logo.jpg"}/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Setting</div>
            </nav>
            <div>
                Main content
            </div>
        </div>
    );
}

export default App;
