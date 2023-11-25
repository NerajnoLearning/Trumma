import React from "react";
import DrumPad from "./DrumPad";


const DRUM_PADS = [
  { triggerKey: "Q", audioClip: "../assets/audio/Clap.mp3", className:"clip", id:"Q"},
  { triggerKey: "W", audioClip: "../assets/audio/Closed-HH.mp3", className:"clip", id:"W" },
  { triggerKey: "E", audioClip: "../assets/audio/Heater-1.mp3", className:"clip", id:"E" },
  { triggerKey: "A", audioClip: "../assets/audio/Heater-2.mp3", className:"clip", id:"A" },
  { triggerKey: "S", audioClip: "../assets/audio/Heater-3.mp3", className:"clip", id:"S" },
  { triggerKey: "D", audioClip: "../assets/audio/Heater-4.mp3", className:"clip", id:"D" },
  { triggerKey: "Z", audioClip: "../assets/audio/Kick_n_Hat.mp3", className:"clip", id:"Z" },
  { triggerKey: "X", audioClip: "../assets/audio/Kick.mp3", className:"clip", id:"X" },
  { triggerKey: "C", audioClip: "../assets/audio/Open-HH.mp3", className:"clip", id:"C" },
];

function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="display">
        {DRUM_PADS.map((drumPad) => (
          <DrumPad
            key={drumPad.triggerKey.valueOf()}
            id={drumPad.triggerKey.valueOf()}
            triggerKey={drumPad.triggerKey}
            audioClip={drumPad.audioClip} />

        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
