import { addPostActionCreator, addPostWithNameActionCreator, updatePostTextActionCreator } from './../../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dataPosts: state.profilePage.dataPosts,
        newPostText: state.profilePage.newPostText, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (name) => { dispatch(addPostActionCreator(name)) },
        updatePostText: (text) => { dispatch(updatePostTextActionCreator(text)) },
        addQuote: (name) => {dispatch(addPostWithNameActionCreator(name))}
    } 
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;