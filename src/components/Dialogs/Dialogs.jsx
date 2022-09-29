import React from 'react';
import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Alexey
                </div>
                <div className={s.dialog}>
                    Tatyana
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog + '' + s.active}>
                    Alina
                </div>
                <div className={s.dialog}>
                    Ponteley
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What are you doing here?</div>
            </div>
        </div>
    )
}

export default Dialogs;