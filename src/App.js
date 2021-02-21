import "./styles.css";
import SpotifyAuthButton from "./SpotifyAuthButton";
import MapComponent from "./MapComponent";
import {useEffect, useState} from 'react';
import Player from './Player';
import fetch from 'node-fetch';
// import AppButton from "./AppButton";

const spotify_secret = process.env.REACT_APP_SPOTIFY_SECRET;
const spotify_clientid = process.env.REACT_APP_SPOTIFY_CLIENTID;
const happi_key = process.env.REACT_APP_HAPPI_KEY;

export default function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [songItem, setSongItem] = useState({});
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progress, setProgresss] = useState(0);

  useEffect(() => {
    getSpotifyToken();
    if (spotifyToken != "") {
      getCurrentlyPlaying();
    }
  }, [spotifyToken]);

  function getCurrentlyPlaying() {
    fetch("https://api.spotify.com/v1/me/player", {
      method: "GET",
      headers: {
        Authorization: "Bearer: " + spotifyToken
      }
    }).then((res) => {
      console.log(res);
    });
  }

  function getSpotifyToken() {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    
    if (window.location.hash != "" && hash.access_token != spotifyToken) {
      setSpotifyToken(hash.access_token);
    }
  }

  return (
    <div className="App">
      <h1>Ya yeet</h1>
      <div>{spotifyToken}</div>
      <SpotifyAuthButton />
      <MapComponent />
      {/* <AppButton text="Make Guess" /> */}
    </div>
  );
}