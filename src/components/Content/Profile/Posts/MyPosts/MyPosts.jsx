import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post'
import * as axios from 'axios';
const MyPosts = (props) => {
  let newPostText = props.newPostText;
  let addPost = (name) => props.addPost(name);
  let updatePostText = () => {
    let text = newPost.current.value;
    props.updatePostText(text);
  }
  let newPost = React.createRef();
  let posts = props.dataPosts.map(post => <Post name={post.name} msg={post.message} />);

  let getQuote = () => {
    
    
      axios.get('https://favqs.com/api/qotd').then(response => {
        props.updatePostText(response.data.quote.body);
        props.addQuote(response.data.quote.author);
      });
    



  }



  return (
    <div className={s.posts}>
      <div>
        <textarea ref={newPost} value={newPostText} onChange={updatePostText}></textarea>
        <div>
          <button onClick={addPost}>add post</button>
          <button onClick={getQuote}>get quote</button>
        </div>
      </div>
      {posts}
    </div>
  )
}

export default MyPosts;