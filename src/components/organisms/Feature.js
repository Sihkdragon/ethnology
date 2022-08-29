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
    <div className="w-full h-20 sm:h-full  bg-choc-dark rounded-md border-4  shadow-inner border-choc-dark grid grid-cols-2 sm:grid-cols-4">
      <div className="w-full flex justify-center flex-col md:px-1 gap-1">
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

        <button className="text-white font-main  text-xs block xl:text-sm 2xl:text-base">
          Download Sample
        </button>
      </div>
      <div className="w-full hidden sm:flex justify-center flex-col px-1 ">
        <FeatureButton onClick={LetterDisplayedHandler}>
          {!LetterDisplayed ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main  hidden md:block 2xl:text-base  ">
          Letter Notes
        </button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-1">
        <FeatureButton onClick={SustainStatusHandler}>
          {!SustainStatus ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main text-xs 2xl:text-base block">
          Sustain
        </button>
      </div>
      <div className=" w-full hidden sm:flex items-center md:pl-2">
        <span className="text-white font-main text-sm 2xl:text-base">
          Volume
        </span>
        <input
          type="range"
          name=""
          id="volumeslider"
          className="-rotate-90 duration-100 ease-linear -ml-6 focus:bg-orange-dark"
          max="2"
          min="-10"
          value={SampleVolume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
          step={1}
        />
        <div className="w-3 h-20 -m-6 hidden md:flex flex-col justify-between py-1">
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
