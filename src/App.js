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
  const [done, setDone] = useState(false);
  
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
    if(selectedCountryHistory.length == 5){
      console.log("done")
      setDone(true);
    }
  }

  const replay = () => {
      setDone(false);
      setPlaying(true);
      setScore(0);
      setChoice();
      trackCountryHistory = [];
      selectedCountryHistory = [];
  }


  return (
    <div id="App" className="App">
      <h1>SpotiGuessr</h1>

      {!done? <div><MapComponent playing={playing} onCountryChange={(country) => {setChoice(country);}} />
      <Player playing={playing} setPlaying={setPlaying}
        setCountry={(trackCountry)=>{
          console.log(`answer:${trackCountry}`)
          trackCountryHistory.push(trackCountry);}}/>
      {playing && <AppButton text="Make Guess" onClick={makeGuess}/>}
      {choice && <div>Choice: {choice.ADMIN}</div>}</div> : <br/>}

      <div>Score: {score}</div>

      {done && <AppButton text="Play Again" onClick={replay}/>}

    </div>
  );
}