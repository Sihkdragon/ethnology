import * as Tone from "tone";
import { BASE_URL, audio_URL } from "../../global/app";
const SamplerData = {
  urls: {
    C7: `${BASE_URL}${audio_URL}Saron//saron.wav`,
  },
  release: 1,
  baseUrl: BASE_URL,
};

const sampler = new Tone.Sampler(SamplerData).toDestination();
function playSound(note, release) {
  Tone.loaded().then(() => {
    sampler.triggerAttack([note], release);
  });
}
export { playSound };
