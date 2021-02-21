import React from 'react'
import AppButton from './AppButton'
export default function ResultDisplay(props) {
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

    let artist = (props.track)?props.track.artists[0].name:""
    let country = (props.track)?regionNames.of(props.track.country.toUpperCase()):""

    return (
        <div>
            <div>{(props.track)?props.track.name:""}</div>
            <div>By {artist} from {country}</div>
            <AppButton text="next"onClick={props.onNextSong} enabled={true}/>
        </div>
    )
}
