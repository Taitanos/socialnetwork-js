import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


function Dialogs() {

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
    let dialogElement = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;