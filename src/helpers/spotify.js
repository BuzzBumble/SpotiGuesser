import fetch from "node-fetch";

const spotify_secret = process.env.REACT_APP_SPOTIFY_SECRET;
const spotify_clientid = process.env.REACT_APP_SPOTIFY_CLIENTID;
const happi_key = process.env.REACT_APP_HAPPI_KEY;
const basic_auth = btoa(`${spotify_clientid}:${spotify_secret}`);

function getSpotifyToken() {
  return fetch("https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basic_auth}`
      },
      body: `grant_type=client_credentials`
    }).then((res) => {
      return res.json();
    });
}

function getSpotifyPlaylist(id, token) {
  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?market=CA`,
  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }).then((res) => {
    return res.json();
  });
}

export {
  getSpotifyToken,
  getSpotifyPlaylist
};