import React from 'react';
import s from './Message.module.css'


function Message(props) {
    return (
        <div className={s.contentMessage}>
            <div className={s.avaMessage}>
                <img src={"https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"} alt={"Avatar"}/>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;