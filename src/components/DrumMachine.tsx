import React from "react";
import DrumPad from "./DrumPad";


const DRUM_PADS = [
  { triggerKey: "Q", audioClip: "../assets/audio/Clap.mp3"},
  { triggerKey: "W", audioClip: "../assets/audio/Closed-HH.mp3" },
  { triggerKey: "E", audioClip: "../assets/audio/Heater-1.mp3" },
  { triggerKey: "A", audioClip: "../assets/audio/Heater-2.mp3" },
  { triggerKey: "S", audioClip: "../assets/audio/Heater-3.mp3" },
  { triggerKey: "D", audioClip: "../assets/audio/Heater-4.mp3" },
  { triggerKey: "Z", audioClip: "../assets/audio/Kick_n_Hat.mp3" },
  { triggerKey: "X", audioClip: "../assets/audio/Kick.mp3" },
  { triggerKey: "C", audioClip: "../assets/audio/Open-HH.mp3" },
];

const DrumMachine: React.FC = () => {
  return (
    <div id="drum-machine">
      <div id="display">
      {DRUM_PADS.map((drumPad) => (
        <DrumPad
          key={drumPad.triggerKey.valueOf()}
          id={drumPad.triggerKey}
          triggerKey={drumPad.triggerKey}
          audioClip={drumPad.audioClip }
        />
      ))}
      </div>
    </div>
  );
};

export default DrumMachine;
