import React from "react";
import "./player.css";
import fetch from "node-fetch";

const happi_key = process.env.REACT_APP_HAPPI_KEY;


export default function Player(props) {
  // const backgroundStyles = {
  //   backgroundImage: `url(${props.item.album.images[0].url})`,
  // };

  // const progressBarStyles = {
  //   width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
  // };

  async function getCountry(query_artist){
    const id_response = await fetch(`https://api.happi.dev/v1/music?q=${encodeURI(query_artist)}&limit=1&apikey=${happi_key}&type=artist&lyrics=0`);
    const id_json = await id_response.json();
    const id = id_json['result']['0']['id_artist'];
    console.log(id);

    const country_response = await fetch(`https://api.happi.dev/v1/music/artists/${id}?apikey=${happi_key}`);
    const country_json = await country_response.json();
    const country = country_json['result']['country'];
    console.log(country);

    return country;
  }

  return (
    <button onClick={()=>getCountry("Martin Garrix")}>
          Activate Lasers
    </button>
  );
}
 {/* <div className="player">
      <div className="main-wrapper">
        
        <div className="now-playing__img">
          <img src={props.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {props.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div
              className="progress__bar"
              style={progressBarStyles}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div> */}