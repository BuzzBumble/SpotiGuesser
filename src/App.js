import "./styles.css";

import MapComponent from "./MapComponent";

import {useEffect, useState} from 'react';
import Player from './Player';
import {getSpotifyToken, getSpotifyPlaylist} from './helpers/spotify';
import {getCountry} from './helpers/happi-dev';
import AppButton from "./AppButton";

const playlist_id = "3OLYDyPxRRHWASFWJ4D7I6";


export default function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [trackCountry, setTrackCountry] = useState("");
  const [choice, setChoice] = useState({});

  const handleChoice = country => {
    setChoice(country);
  };
  
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
        setPlaylist(tracks)
        setCurrentTrack(tracks[Math.floor(Math.random() * data.total)]);
      });
    }
  }, [spotifyToken]);

  useEffect(() => {
    if(Object.keys(currentTrack).length>0){
      getCountry(currentTrack["artists"][0]["name"]).then((country)=>{
        if(country == ""){
          setCurrentTrack(playlist[Math.floor(Math.random() * playlist.length)]);
        }else{
          setTrackCountry(country)
        }
      })
    }
  },[currentTrack]);

  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <MapComponent onCountryChange={handleChoice} />
      <Player url={currentTrack.preview_url} />
      <AppButton text="Make Guess" />
      <div>Choice: {choice.ADMIN}</div>
    </div>
  );
}