import React from 'react';
//import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../../../redux/messagesReducer';
import Message from './Message/Message';
import s from './messages.module.css';

const Messages = (props) => {
    let messages = props.messages.map( message => <Message text={message.text} />);
    let newMessage = React.createRef();
    let updateTextMessage = () => {
        let text = newMessage.current.value;
        props.updateTextMessage(text);
    }
    let addMessage = () => props.addMessage();
    const handleKeyDown = (e) => { if (e.key === 'Enter') addMessage() };
    
    return (
        <div className={s.body}>
            <div className={s.messages}>
                {messages}
            </div>

            <div className={s.textInput}>
                <input
                    onKeyDown={handleKeyDown}
                    ref={newMessage}
                    type='text'
                    spellcheck='false'
                    className={s.input}
                    placeholder='Напишите сообщение...'
                    value={props.newTextMessage}
                    onChange={updateTextMessage}>
                </input>

                <span className="material-symbols-outlined" onClick={addMessage}>
                    send
                </span>

            </div>
        </div>
    )
};

export default Messages;