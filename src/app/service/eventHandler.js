import { key_to_note } from "../../global/constant";
import { playSound } from "./player";

const keyPressHandler = (e) => {
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
};

const keyDownHandler = (e) => {
  if (e.repeat) {
    return;
  }
  if (key_to_note[e.key]) {
    console.log(e.key);
  }
};

const keyUpHandler = (e) => {};

export { keyPressHandler, keyDownHandler, keyUpHandler };
