import { useAtom } from "jotai";
import { base_url } from "../../global/app";
import {
  isLetterDisplayed,
  isSustainON,
  SampleActive,
  Volume,
} from "../../global/state";
import FeatureButton from "../atoms/FeatureButton";

const PanelADSR = () => {
  const [SampleVolume, setVolume] = useAtom(Volume);
  const [LetterDisplayed, setLetterDisplayed] = useAtom(isLetterDisplayed);
  const [SustainStatus, setSustainStatus] = useAtom(isSustainON);
  const [ActiveSample] = useAtom(SampleActive);

  const LetterDisplayedHandler = () => {
    !LetterDisplayed ? setLetterDisplayed(true) : setLetterDisplayed(false);
  };
  const SustainStatusHandler = () => {
    !SustainStatus ? setSustainStatus(true) : setSustainStatus(false);
  };

  return (
    <div className="w-full bg-choc-dark rounded-md border-4  shadow-inner border-choc-dark grid grid-cols-4">
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton
          onClick={() => {
            window.open(
              `${base_url()}audio/${ActiveSample}.wav`,
              "blank",
              "noopener, noreferrer"
            );
          }}
        >
          Download
        </FeatureButton>
        <button className="text-white font-main text-sm 2xl:text-base block">
          Download Sample
        </button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton onClick={LetterDisplayedHandler}>
          {!LetterDisplayed ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main text-sm 2xl:text-base block">
          Letter Notes
        </button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton onClick={SustainStatusHandler}>
          {!SustainStatus ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main text-sm 2xl:text-base block">
          Sustain
        </button>
      </div>
      <div className=" w-full flex items-center pl-2">
        <span className="text-white font-main text-sm 2xl:text-base">
          Volume
        </span>
        <input
          type="range"
          name=""
          id="volumeslider"
          className="-rotate-90 duration-100 ease-linear"
          max="2"
          min="-10"
          value={SampleVolume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
          step={1}
        />
        <div className=" w-3 h-20 -m-6 flex flex-col justify-between py-1">
          <div className="bg-white w-full h-[2px] rounded"></div>
          <div className="bg-white w-full h-[2px] rounded"></div>
          <div className="bg-white w-full h-[2px] rounded"></div>
          <div className="bg-white w-full h-[2px] rounded"></div>
          <div className="bg-white w-full h-[2px] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PanelADSR;
