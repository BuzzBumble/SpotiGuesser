import ReactAudioPlayer from 'react-audio-player';
import {useEffect, useState} from 'react';
import {getSpotifyToken, getSpotifyPlaylist} from './helpers/spotify';
import {getCountry} from './helpers/happi-dev';
import ResultDisplay from './ResultDisplay';

const playlist_id = "3OLYDyPxRRHWASFWJ4D7I6";

export default function Player(props) {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    if (spotifyToken == "") {
      getSpotifyToken().then((data) => {
        setSpotifyToken(data.access_token);
      });
    } else {
      getSpotifyPlaylist(playlist_id, spotifyToken).then((data) => {
        let tracks = data.items.map((item) => {
          return item.track;
        })
        shuffle(tracks)
        setPlaylist(tracks)
        setCurrentTrack(tracks[0]);
      });
    }
  }, [spotifyToken]);

  useEffect(() => {
    if(currentTrack){
      props.setGuessable(false);
      getCountry(currentTrack["artists"][0]["name"]).then((country)=>{
        if(country == ""){
          let removed = playlist.shift();
          setCurrentTrack(playlist[0]);
        }else{
          props.setCountry(country)
          props.setGuessable(true);
          currentTrack.country = country
        }
      })
    }
  },[currentTrack]);

  function onNextSong(){
    let removed = playlist.shift();
    setCurrentTrack(playlist[0]);
    props.setPlaying(true)
  }

  return (
    <div>
      <ReactAudioPlayer
        src={currentTrack?currentTrack.preview_url: ""}
        volume={0.3}
        controls
      />
      <br/>
      {!props.playing && <ResultDisplay track={currentTrack} onNextSong={onNextSong}/>}
    </div>
    
  );
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
