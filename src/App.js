import "./styles.css";
import MapComponent from "./MapComponent";
import {useEffect, useState} from 'react';
import Player from './Player';
import fetch from 'node-fetch';
import {getSpotifyToken, getSpotifyPlaylist} from './helpers/spotify';
// import AppButton from "./AppButton";
// import SpotifyAuthButton from "./SpotifyAuthButton";

const playlist_id = "3OLYDyPxRRHWASFWJ4D7I6";

export default function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [songItem, setSongItem] = useState({});
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progress, setProgresss] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});

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

  return (
    <div className="App">
      <h1>Ya yeet</h1>
      <div>{spotifyToken}</div>
      <MapComponent />
{/*       <SpotifyAuthButton /> */}
      {/* <AppButton text="Make Guess" /> */}
    </div>
  );
}