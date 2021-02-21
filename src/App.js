import "./styles.css";
import MapComponent from "./MapComponent";
import Player from './Player';
import AppButton from "./AppButton";

import {useEffect, useState} from 'react';

export default function App(){
  const [trackCountry, setTrackCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [score, setScore] = useState(0);
  
  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <MapComponent />
      <AppButton text="Make Guess" />
      <Player setCountry={setTrackCountry}/>
    </div>
  );
}