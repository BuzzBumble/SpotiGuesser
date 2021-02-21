import "./styles.css";

import MapComponent from "./MapComponent";
import Player from './Player';
import AppButton from "./AppButton";

import {useEffect, useState} from 'react';
let trackCountryHistory = [];
let selectedCountryHistory = [];

export default function App(){
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState();
  const [playing, setPlaying] = useState(true);
  
  // const [trackCountryHistory, setTrackCountry] = useState([]);
  // const [selectedCountryHistory, setSelectedCountry] = useState([]);
  function makeGuess(){
    if(choice){
      setPlaying(false);
      selectedCountryHistory.push(choice.ISO_A2.toLowerCase());
      if(selectedCountryHistory[selectedCountryHistory.length-1] === trackCountryHistory[trackCountryHistory.length-1]){
        setScore(score+1);
      }
    }
  }

  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <MapComponent playing={playing} onCountryChange={(country) => {setChoice(country);}} />
      <Player playing={playing} setPlaying={setPlaying}
        setCountry={(trackCountry)=>{
          console.log(`answer:${trackCountry}`)
          trackCountryHistory.push(trackCountry);}}/>
      <AppButton text="Make Guess" onClick={makeGuess}/>
      <div>Choice: {choice?choice.ADMIN:""}</div>
      <div>Score: {score}</div>
    </div>
  );
}