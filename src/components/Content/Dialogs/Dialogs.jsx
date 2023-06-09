import React from 'react';
import s from './Dialogs.module.css'
import DialogsList from './dialogsList/DialogsList/DialogsList';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsList state={props.store.getState().messagesPage}/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;