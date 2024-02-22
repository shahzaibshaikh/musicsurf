import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface Props {
  preview_url: string;
}

const AudioTrackPlayer = ({ preview_url }: Props) => {
  return (
    <AudioPlayer
      autoPlay
      src={preview_url}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );
};

export default AudioTrackPlayer;
