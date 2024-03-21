import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    let dialogElement = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageText

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <Dialogs
            updateNewMessageBody={onMessageChange}
            addMessage={addMessage}
            dialogElement={dialogElement}
            messagesElement={messagesElement}
            newMessageBody={newMessageBody}
        />
    )
}

export default DialogsContainer;