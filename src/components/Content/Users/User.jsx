import React from 'react';
import s from './users.module.css';

const User = (props) => {
    let unfollow = (user_id) => {
        debugger;
         props.unfollow(user_id) 
    };
    let follow = (user_id) => { 
        debugger;
        props.follow(user_id) 
    };
    return (
        <div className={s.item}>
            <div className={s.picture}>
                <img
                    src={props.data.photos.small != null ? props.data.photos.small : 'https://manager.almadarisp.com/user/img/user.png'}
                    alt=''>
                </img>
            </div>
            <div className={s.center}>
                <div className={s.name}>{props.data.name}</div>
                
                <div className={s.status}>{props.data.status}</div>
            </div>
            {props.data.followed ?
                <div className={s.button} onClick={()=>unfollow(props.data.id)}>Remove</div> :
                <div className={s.button} onClick={()=>follow(props.data.id)}>Follow</div>}
        </div>
    )
}

export default User;