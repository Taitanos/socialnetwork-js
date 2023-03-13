import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src={'https://t3.ftcdn.net/jpg/01/72/84/00/360_F_172840094_eF1Cx8vBfuGBHcSqImum8af0iX2YrUUM.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;