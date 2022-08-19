import { useEffect, useState } from "react";
import PianoKey from "../atoms/PianoKey";
import { key, key_to_note } from "../../global/constant";
// import { keyPressHandler } from "../../app/service/eventHandler";
import { playSound } from "../../app/service/player";
import { onMIDIfailure } from "../../app/service/midiHandler";

const Piano = () => {
  const [PressedKey, setPressedKey] = useState("");
  const [PressedNote, setPressedNote] = useState("");

  const keyPressHandler = (e) => {
    setPressedKey(e.key);
    let sampleStorage = JSON.parse(localStorage.getItem("EthnologySample"));
    let sustainStorage = JSON.parse(localStorage.getItem("EthnologySustain"));
    let volumeStorage = parseInt(
      JSON.parse(localStorage.getItem("EthnologyVolume"))
    );
    if (key_to_note[e.key]) {
      playSound(
        key_to_note[e.key],
        sustainStorage ? 1 : 0,
        sampleStorage,
        volumeStorage
      );
    }
    setTimeout(() => {
      setPressedKey("");
    }, 200);
  };

  function onMIDIsuccess(midiAccess) {
    const inputs = midiAccess.inputs;
    inputs.forEach((input) => {
      input.addEventListener("midimessage", handleMIDIinput);
    });
  }

  function handleMIDIinput(e) {
    let sampleStorage = JSON.parse(localStorage.getItem("EthnologySample"));
    let sustainStorage = JSON.parse(localStorage.getItem("EthnologySustain"));

    let volumeStorage = parseInt(
      JSON.parse(localStorage.getItem("EthnologyVolume"))
    );
    const data = e.data;
    if (volumeStorage >= 0) {
      volumeStorage = volumeStorage / 4;
    } else {
      volumeStorage = volumeStorage * 4;
    }
    if (data[0] === 144) {
      let keyPress = key[data[1] - 48];
      setPressedNote(keyPress);
      console.log(PressedNote);
      playSound(
        keyPress,
        sustainStorage ? 1 : 0,
        sampleStorage,
        volumeStorage / 4
      );
    }
    setTimeout(() => {
      setPressedNote("");
    }, 200);
  }

  useEffect(() => {
    setPressedNote("");
    setPressedKey("");
    window.addEventListener("keypress", keyPressHandler);
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDIsuccess, onMIDIfailure);
    }
  }, []);

  return (
    <div className="rounded-t-sm bg-white h-full flex">
      {key.map((key, index) => {
        return (
          <PianoKey
            note={key}
            key={index}
            indeks={index}
            PressedNote={PressedNote}
            pressedKeys={PressedKey}
          />
        );
      })}
    </div>
  );
};

export default Piano;
