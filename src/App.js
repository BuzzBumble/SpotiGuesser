import "./styles.css";
import {React, useState} from 'react'
import SpotifyAuthButton from "./SpotifyAuthButton";
import MapComponent from "./MapComponent";
import AppButton from "./AppButton";

export default function App() {
  const [choice, setChoice] = useState({});

  const handleChoice = country => {
    setChoice(country);
  };

  return (
    <div className="App">
      <h1>SpotiGuessr</h1>
      <SpotifyAuthButton />
      <MapComponent onCountryChange={handleChoice} />
      <AppButton text="Make Guess" />
      <div>Choice: {choice.ADMIN}</div>
    </div>
  );
}
