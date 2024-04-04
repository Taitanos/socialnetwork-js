import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/photoUsers.jpg'
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'photo'}/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    );
};

export default Users;