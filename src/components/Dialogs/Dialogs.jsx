import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

    let state = props.dialogsPage

    let dialogElement = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageText

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea className={s.textArea} onChange={onMessageChange}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;