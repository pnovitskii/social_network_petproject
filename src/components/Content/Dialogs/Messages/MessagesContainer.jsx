//import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from './../../../../redux/messagesReducer';
import Messages from './Messages/Messages';
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {
//     let state = props.store.getState().messagesPage;
//     let updateTextMessage = (text) => {
//         let action = updateMessageTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//     let addMessage = () => props.store.dispatch(addMessageActionCreator());

//     return (
//         <Messages
//             messages={state.dataMessages}
//             newTextMessage={state.newTextMessage}
//             updateTextMessage={updateTextMessage}
//             addMessage={addMessage} />
//     )
// };

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.dataMessages,
        newTextMessage: state.messagesPage.newTextMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateTextMessage: (text) => { dispatch(updateMessageTextActionCreator(text)) },
        addMessage: () => { dispatch(addMessageActionCreator()) }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
//const MessagesContainer = () => {return (<div></div>)};
export default MessagesContainer;