import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
                followed: true,
                fullName: 'Alexey',
                status: 'I am Backend developer',
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
                followed: false,
                fullName: 'Tatyana',
                status: 'I am cool and i know it',
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
                followed: false,
                fullName: 'Sergey',
                status: 'I am cool and i know it',
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
                followed: true,
                fullName: 'Alina',
                status: 'I am streamer',
                location: {city: 'Sochi', country: 'Russia'}
            },
            {
                id: 5,
                photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
                followed: true,
                fullName: 'Ponteley',
                status: 'I am cute cat and i know it',
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl} alt={'photo user'}/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    );
};

export default Users;