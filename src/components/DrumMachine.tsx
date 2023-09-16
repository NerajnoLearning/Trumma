import React from "react";
import DrumPad from "./DrumPad";

const DRUM_PADS = [
  { triggerKey: "Q", audioClip: "/assets/audio/Q.mp3" },
  { triggerKey: "W", audioClip: "/assets/audio/W.mp3" },
  { triggerKey: "E", audioClip: "/assets/audio/E.mp3" },
  { triggerKey: "A", audioClip: "/assets/audio/A.mp3" },
  { triggerKey: "S", audioClip: "/assets/audio/S.mp3" },
  { triggerKey: "D", audioClip: "/assets/audio/D.mp3" },
  { triggerKey: "Z", audioClip: "/assets/audio/Z.mp3" },
  { triggerKey: "X", audioClip: "/assets/audio/X.mp3" },
  { triggerKey: "C", audioClip: "/assets/audio/C.mp3" },
];

const DrumMachine: React.FC = () => {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      {DRUM_PADS.map((drumPad) => (
        <DrumPad
          key={drumPad.triggerKey}
          triggerKey={drumPad.triggerKey}
          audioClip={drumPad.audioClip}
        />
      ))}
    </div>
  );
};

export default DrumMachine;
