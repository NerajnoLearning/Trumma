import React, { useState, useEffect } from "react";
import { useAudio } from "../hooks/useAudio";
// import DRUM_PADS from "./DrumMachine";

interface DrumPadProps {
  triggerKey: string;
  audioClip: string;
  id: string;
}


const DrumPad: React.FC<DrumPadProps> = ({  triggerKey, audioClip }) => {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const { playAudio } = useAudio(audioClip);

  useEffect(() => {
    const playAudioPromise = async (): Promise<void> => {
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

  const handleClick = (): void => {
    setIsTriggered(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent):  void => {
    if (e.key === triggerKey) {
      setIsTriggered(true);
    }
  };

  return (
    <div
      className="drum-pad clip"
      onClick={handleClick}
      id="drum-pad"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {triggerKey}
    </div>
  );
};

export default DrumPad;
