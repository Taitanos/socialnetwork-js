import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import StoreContext from '../../StoreContext';

function DialogsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    let dialogElement = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
                    let messagesElement = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
                    let newMessageBody = state.newMessageText

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    }

                    return <Dialogs
                        updateNewMessageBody={onMessageChange}
                        addMessage={addMessage}
                        dialogElement={dialogElement}
                        messagesElement={messagesElement}
                        newMessageBody={newMessageBody}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;