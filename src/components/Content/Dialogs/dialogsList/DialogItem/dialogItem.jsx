import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogItem.module.css';
//https://yannflucksa.ch/wp-content/uploads/2020/02/user.png
//https://cdn.impactinit.com/cdn/x/x@f59b8e3f78/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23497.jpg
const DialogItem = (props) => {
    return (
        <div className={s.navlink}>
            <NavLink to={'./'+props.id}>
                <div className={s.dialogItem}>
                    <div className={s.avatar}>
                        <img
                            src='https://manager.almadarisp.com/user/img/user.png'
                            alt='avatar' />
                    </div>
                    <p className={s.name}>
                        {props.name}
                    </p>

                </div>
            </NavLink>
        </div>
    )
}
export default DialogItem