import "./styles.css";

import MapComponent from "./MapComponent";
import Player from './Player';
import AppButton from "./AppButton";

import {useEffect, useState} from 'react';

export default function App(){
  const [trackCountry, setTrackCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState({});
  const handleChoice = country => {
    setChoice(country);
  };
  
  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <MapComponent onCountryChange={handleChoice} />
      <Player url={currentTrack.preview_url} />
      <AppButton text="Make Guess" />
      <div>Choice: {choice.ADMIN}</div>
    </div>
  );
}