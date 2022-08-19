import * as Tone from "tone";
import { BASE_URL } from "../../global/app";
function playSound(note, release, InstrumenSample, SampleVolume) {
  const SamplerData = {
    urls: {
      C7: `${InstrumenSample}.wav`,
    },
    release: 2,
    baseUrl: BASE_URL,
  };
  const sampler = new Tone.Sampler(SamplerData).toDestination();
  sampler.volume.value = SampleVolume;
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease([note], release);
  });
}
export { playSound };
