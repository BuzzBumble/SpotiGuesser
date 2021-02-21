import "./styles.css";
import SpotifyAuthButton from "./SpotifyAuthButton";
import MapComponent from "./MapComponent";
import {useEffect, useState} from 'react';
import Player from './Player';
import fetch from 'node-fetch';
// import AppButton from "./AppButton";

export default function App() {
  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {
    getSpotifyToken();
  })

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
