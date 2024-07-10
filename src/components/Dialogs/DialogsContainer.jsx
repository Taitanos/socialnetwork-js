import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;