import "./styles.css";
import SpotifyAuthButton from "./SpotifyAuthButton";
import MapComponent from "./MapComponent";
import AppButton from "./AppButton";

export default function App() {
  return (
    <div className="App">
      <h1>Ya yeet</h1>
      <SpotifyAuthButton />
      <MapComponent />
      <AppButton text="Make Guess" />
    </div>
  );
}
