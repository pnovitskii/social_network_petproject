const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

let initialState = {
    dataDialogs: [
        { id: '0', name: 'Pavel' },
        { id: '1', name: 'James' },
        { id: '2', name: 'Влад' },
        { id: '3', name: 'Витёк' },
        { id: '4', name: 'Антон' },
        { id: '5', name: 'Kavo' },
        { id: '6', name: 'Ladno' },
        { id: '7', name: 'Себек' },
      ],
      dataMessages: [],
      newTextMessage: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.newTextMessage === '') return state;
            return {
                ...state,
                dataMessages: [ { text: state.newTextMessage }, ...state.dataMessages],
                newTextMessage: '' 
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newTextMessage: action.text
            }
        }
        default:
            return state;
    }
}

export default messagesReducer;