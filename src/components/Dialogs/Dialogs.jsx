import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
        return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}  id={messagesData[0].id}/>
                <Message message={messagesData[1].message}  id={messagesData[1].id}/>
                <Message message={messagesData[2].message}  id={messagesData[2].id}/>
                <Message message={messagesData[3].message}  id={messagesData[3].id}/>
                <Message message={messagesData[4].message}  id={messagesData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs;