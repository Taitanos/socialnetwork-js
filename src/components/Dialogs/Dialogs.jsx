import React from 'react';
import s from './Dialogs.module.css'


function Dialogs(props) {

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
                {props.dialogElement}
            </div>
            <div className={s.messages}>
                {props.messagesElement}
                <div>
                    <textarea className={s.textArea} onChange={onMessageChange}
                              value={props.newMessageBody}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;