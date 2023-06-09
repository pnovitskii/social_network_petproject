// import messagesReducer from "./messagesReducer";
// import profileReducer from "./profileReducer";

// let store = {
//   _state: {
//     profilePage: {
//       dataPosts: [
//         { name: 'Alex', message: "Hello! How it's goin?" },
//         { name: 'Pavel', message: 'Здарова.' },
//         { name: 'James', message: 'Good morning, sir!' }
//       ],
//       newPostText: ''
//     },
//     messagesPage: {
//       dataDialogs: [
//         { id: '0', name: 'Pavel' },
//         { id: '1', name: 'James' },
//         { id: '2', name: 'Влад' },
//         { id: '3', name: 'Витёк' },
//         { id: '4', name: 'Антон' },
//         { id: '5', name: 'Kavo' },
//         { id: '6', name: 'Ladno' },
//         { id: '7', name: 'Себек' },
//       ],
//       dataMessages: [],
//       newTextMessage: ''
//     }
//   },
//   getState() { return this._state },
//   rerenderEntireTree() {
//     console.log('state changed');
//   },
//   subscribe(observer) { this.rerenderEntireTree = observer; },
//   addPost() {

//   },
//   updatePostText(text) {
    
//   },
  
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//     this.rerenderEntireTree(this._state);
//   }
// };




// export default store;