import { key } from "../../global/constant";

import { playSound } from "./player";
function onMIDIsuccess(midiAccess) {
  const inputs = midiAccess.inputs;
  inputs.forEach((input) => {
    input.addEventListener("midimessage", handleMIDIinput);
  });
}

function onMIDIfailure() {
  alert("cant connect");
}

function handleMIDIinput(e) {
  let sampleStorage = JSON.parse(localStorage.getItem("EthnologySample"));
  let sustainStorage = JSON.parse(localStorage.getItem("EthnologySustain"));
  let volumeStorage = parseInt(
    JSON.parse(localStorage.getItem("EthnologyVolume"))
  );
  const data = e.data;
  if (data[0] === 144) {
    playSound(
      key[data[1] - 36],
      sustainStorage ? 1 : 0,
      sampleStorage,
      volumeStorage
    );
  }
  console.log(data);
}
export { onMIDIfailure, onMIDIsuccess, handleMIDIinput };
