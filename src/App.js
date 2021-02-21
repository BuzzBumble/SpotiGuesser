import "./styles.css";
import SpotifyAuthButton from "./SpotifyAuthButton";
import MapComponent from "./MapComponent";
import {useState} from 'react';
// import AppButton from "./AppButton";

export default function App() {
  const [spotifyToken, setSpotifyToken] = useState("");

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

  return (
    <div className="App">
      <h1>Ya yeet</h1>
      <p>{spotifyToken}</p>
      <SpotifyAuthButton />
      <MapComponent />
      {/* <AppButton text="Make Guess" /> */}
    </div>
  );
}
