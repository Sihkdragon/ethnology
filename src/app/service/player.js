import * as Tone from "tone";
import { BASE_URL } from "../../global/app";

function getSamplerData(InstrumenSample) {
  switch (InstrumenSample) {
    case "angklung":
      return { C7: `${InstrumenSample}.wav` };
      break;
    case "bonang":
      return { Db5: `${InstrumenSample}.wav` };
      break;
    case "gambang":
      return { C6: `${InstrumenSample}.wav` };
      break;
    case "saron":
      return { C6: `${InstrumenSample}.wav` };
      break;
    default:
      break;
  }
}

function playSound(note, release, InstrumenSample, SampleVolume) {
  const SamplerData = {
    urls: getSamplerData(InstrumenSample),
    release: 1,
    baseUrl: BASE_URL,
  };
  const sampler = new Tone.Sampler(SamplerData).toDestination();
  sampler.volume.value = SampleVolume;
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease([note], release);
  });
}
export { playSound };
