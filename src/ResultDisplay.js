import React from 'react'
import AppButton from './AppButton'
export default function ResultDisplay(props) {
    return (
        <div>
            {(props.track)?props.track.name:""}
            <AppButton text="next"onClick={props.onNextSong}/>
        </div>
    )
}
