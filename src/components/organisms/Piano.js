import { useEffect } from "react";
import PianoKey from "../atoms/PianoKey";
import { key } from "../../global/constant";
import { keyPressHandler } from "../../app/service/eventHandler";
import { playSound } from "../../app/service/player";
import { onMIDIfailure, onMIDIsuccess } from "../../app/service/midiHandler";

const Piano = () => {
  useEffect(() => {
    window.addEventListener("keypress", keyPressHandler);
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDIsuccess, onMIDIfailure);
    }
  }, []);

  return (
    <div className="rounded-t-sm bg-white h-full flex">
      {key.map((key, index) => {
        return <PianoKey note={key} key={index} indeks={index} />;
      })}
    </div>
  );
};

export default Piano;
