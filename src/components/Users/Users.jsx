import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/photoUsers.jpg";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI} from "../../api/api";


const Users = (props) => {

    console.log(props)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && s.selectedPage} onClick={() => {
                        props.onPageChanged(page)
                    }}>{page}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt={'photo'}/>
                            </NavLink>
                        </div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)

                                followUnfollowAPI.getUnfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)

                                followUnfollowAPI.getFollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

                            }}>Follow</button>}
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