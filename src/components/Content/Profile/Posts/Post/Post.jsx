import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src='https://manager.almadarisp.com/user/img/user.png' 
                alt=''
            />
            </div>
            <div className={s.body}>
                <div><p className={s.name}>{props.name}</p></div>
                <div><p className={s.message}>{props.msg}</p></div>
                
                
            </div>
            
        </div>
    )
}

export default Post;