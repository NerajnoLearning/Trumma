import React, { useState, useEffect } from "react";
import useAudio from "../hooks/useAudio";

interface DrumPadProps {
  triggerKey: string;
  audioClip: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ triggerKey, audioClip }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const { playAudio } = useAudio();

  useEffect(() => {
    if (isTriggered) {
      playAudio(audioClip);
    }
  }, [isTriggered, audioClip]);

  const handleClick = () => {
    setIsTriggered(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === triggerKey) {
      setIsTriggered(true);
    }
  };

  return (
    <div
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
    >
      {triggerKey}
    </div>
  );
};

export default DrumPad;
