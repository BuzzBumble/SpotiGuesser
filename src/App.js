import "./styles.css";

import MapComponent from "./MapComponent";
import Player from './Player';
import AppButton from "./AppButton";

import {useEffect, useState} from 'react';

export default function App(){
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState({});
  const trackCountryHistory = [];
  const selectedCountryHistory = [];
  // const [trackCountryHistory, setTrackCountry] = useState([]);
  // const [selectedCountryHistory, setSelectedCountry] = useState([]);
  function calcTurn(){
    selectedCountryHistory.push(choice.ISO_A2.toLowerCase());
    
    if(selectedCountryHistory[selectedCountryHistory.length-1] === trackCountryHistory[trackCountryHistory.length-1]){
      console.log("correct");
      setScore(score+1);
    }
  }

  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <MapComponent onCountryChange={(country) => {setChoice(country);}} />
      <Player setCountry={(trackCountry)=>{
        console.log(`player:${trackCountry}`)
        trackCountryHistory.push(trackCountry);
        console.log(trackCountryHistory)}}/>
      <AppButton text="Make Guess" onClick={calcTurn}/>
      <div>Choice: {choice.ADMIN}</div>
    </div>
  );
}