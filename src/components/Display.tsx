import React from "react";
import useAudio from "../hooks/useAudio";

const Display: React.FC = () => {
  const { currentClip } = useAudio();

  return (
    <div id="display">
      {currentClip?.audioClip}
    </div>
  );
};

export default Display;
