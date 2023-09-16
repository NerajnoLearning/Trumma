import React from "react";
import { useAudio } from "../hooks/useAudio";

interface DisplayProps {
  audioClip: string;
}


const Display: React.FC<DisplayProps> = ({audioClip}) => {
  const { isPlaying } = useAudio(audioClip);

  return (
    <div id="display">
      {isPlaying ? audioClip : ''}
    </div>
  );
};

export default Display;
