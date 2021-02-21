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
  const [guessable, setGuessable] = useState(false);
  
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
    <div className="title">
      <img id="logo" src="./img/spotiguesser.svg"/>
      <h1>SpotiGuessr</h1>
    </div> 
      {!done? <div><MapComponent playing={playing} onCountryChange={(country) => {setChoice(country);}} />
      <Player setGuessable={setGuessable}
        playing={playing} setPlaying={setPlaying}
        setCountry={(trackCountry)=>{
        trackCountryHistory.push(trackCountry);}}/>
      {playing && <AppButton text={guessable ? "Make Guess" : "Please Wait"} enabled={guessable} onClick={makeGuess}/>}
      {choice && <div>Choice: {choice.ADMIN}</div>}</div> : <br/>}

      <div>Score: {score}</div>

      {done && <AppButton text="Play Again" enabled={true} onClick={replay}/>}

    </div>
  );
}