import React from 'react';
import DialogItem from '../DialogItem/dialogItem';
import s from './dialogsList.module.css';
const DialogsList = (props) => {
    let dialogs = props.state.dataDialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    
    return (
        <div className={s.dialogsList}>
            <div className={s.cap}>
                <div className={s.text}></div>
            </div>
            <div className={s.items}>
                {dialogs}
            </div>
            <div className={s.bot}></div>
        </div>
    )
}
export default DialogsList;
