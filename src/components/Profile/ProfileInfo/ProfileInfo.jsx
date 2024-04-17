import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={'https://t3.ftcdn.net/jpg/01/72/84/00/360_F_172840094_eF1Cx8vBfuGBHcSqImum8af0iX2YrUUM.jpg'} alt={'background'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'photo'}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;