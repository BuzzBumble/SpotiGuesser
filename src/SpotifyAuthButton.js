import { useState } from "react";

export default function SpotifyAuthButton() {
  const [token, setToken] = useState("");

  const auth_endpoint = "https://accounts.spotify.com/authorize";
  const redirect_URI = "https://qzulf.csb.app/";
  const spotify_cid = "9c761b25d50f47c7a50633ba8b9ebf69";
  const playback_token =
    "BQCrz2XRCL17KNN9lVrkZcClw320Ga7Us6jmxw6S1RsUXf4mexj0O4etlQ8U4FEu2_C8S-VdMFjIdv0Fi4Bd9vYhbddNlhMhBnRwimeZCMHBMxdaMXRyL7gKyh1RGBZQfRPeb1RkQd0GV4ueyzdTBu8u-IkReeeb86hb7LN4bHTfNFoYksB-dBI";
  const scopes = "user-read-currently-playing user-read-playback-state";
  const spotifyHREF =
    `${auth_endpoint}?` +
    `client_id=${spotify_cid}&redirect_uri=${redirect_URI}` +
    `&scope=${scopes}&response_type=token&show_dialog=true`;

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

  window.location.hash = "";

  function spotifyThing(e) {
    e.preventDefault();
    window.open(e.target.href, "popup", "width=600,height=600");
    return false;
  }

  return (
    <a href={spotifyHREF} target="popup" onClick={spotifyThing}>
      Spotify
    </a>
  );
}
