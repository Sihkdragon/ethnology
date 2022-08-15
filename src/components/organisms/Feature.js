import { useAtom } from "jotai";
import { useState } from "react";
import { isLetterDisplayed, isSustainON } from "../../global/state";
import FeatureButton from "../atoms/FeatureButton";

const PanelADSR = () => {
  const [Volume, setVolume] = useState(2.5);
  const [LetterDisplayed, setLetterDisplayed] = useAtom(isLetterDisplayed);
  const [SustainStatus, setSustainStatus] = useAtom(isSustainON);

  const LetterDisplayedHandler = () => {
    !LetterDisplayed ? setLetterDisplayed(true) : setLetterDisplayed(false);
  };
  const SustainStatusHandler = () => {
    !SustainStatus ? setSustainStatus(true) : setSustainStatus(false);
  };

  return (
    <div className="w-full bg-choc-dark rounded-md border-4  shadow-inner border-choc-dark grid grid-cols-4">
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton>Download</FeatureButton>
        <button className="text-white font-main block">Download Sample</button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton onClick={LetterDisplayedHandler}>
          {!LetterDisplayed ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main block">Letter Notes</button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton onClick={SustainStatusHandler}>
          {!SustainStatus ? "OFF" : "ON"}
        </FeatureButton>
        <button className="text-white font-main block">Sustain</button>
      </div>
      <div className=" w-full flex items-center pl-2">
        <span className="text-white font-main">Volume</span>
        <input
          type="range"
          name=""
          id="volumeslider"
          // style={{ WebkitAppearance: "none", appearance: "none" }}
          className="-rotate-90 duration-100 ease-linear"
          max="10"
          min="0"
          value={Volume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
          step={0.1}
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
