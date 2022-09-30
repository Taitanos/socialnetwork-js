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


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Alexey'} id={'1'}/>
                <DialogItem name={'Tatyana'} id={'2'}/>
                <DialogItem name={'Sergey'} id={'3'}/>
                <DialogItem name={'Alina'} id={'4'}/>
                <DialogItem name={'Ponteley'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'What are you doing here?'}/>
            </div>
        </div>
    )
}

export default Dialogs;