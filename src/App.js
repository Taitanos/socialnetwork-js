import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </div>
            </div>
    );
}

export default App;
