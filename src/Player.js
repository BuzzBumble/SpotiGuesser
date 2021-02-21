import ReactAudioPlayer from 'react-audio-player';

export default function Player(props) {
  return (
    <ReactAudioPlayer
      src={props.url}
      volume={0.3}
      controls
    />
  );
}