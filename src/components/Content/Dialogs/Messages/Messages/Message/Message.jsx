import React from 'react';
import s from './message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            {/* <div className={s.space}></div> */}
            <div className={s.text}>
                {props.text}
            </div>
            {/* <div className={s.space}></div> */}
        </div>
    )
};

export default Message;