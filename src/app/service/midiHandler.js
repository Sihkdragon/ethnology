import { key } from "../../global/constant";

import { playSound } from "./player";
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
  if (data[0] === 144) {
    console.log(data[1]);
    playSound(
      key[data[1] - 48],
      sustainStorage ? 1 : 0,
      sampleStorage,
      volumeStorage / 4
    );
  }
}
function onMIDIfailure() {
  alert("cant connect");
}
export { onMIDIfailure, onMIDIsuccess, handleMIDIinput };
