import React, { useState, useEffect } from "react";
import { useAudio } from "../hooks/useAudio";

interface DrumPadProps {
  triggerKey: string;
  audioClip: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ triggerKey, audioClip }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const { playAudio } = useAudio(audioClip);

  useEffect(() => {
    const playAudioPromise = async () => {
      try {
        await playAudio();
      } catch (error) {
        console.error(error);
      }
    };
    if (isTriggered) {
      void playAudioPromise();
    }
  }, [isTriggered, playAudio]);

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
      tabIndex={0}
    >
      {triggerKey}
    </div>
  );
};

export default DrumPad;
