import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {

    let dialogElement = props.dialogsPage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                              ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;