import FeatureButton from "../atoms/FeatureButton";

const PanelADSR = () => {
  return (
    <div className="w-full bg-choc-dark rounded-md border-4  shadow-inner border-choc-dark grid grid-cols-4">
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton>Download</FeatureButton>
        <button className="text-white font-main block">Download Sample</button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton>ON</FeatureButton>
        <button className="text-white font-main block">Letter Notes</button>
      </div>
      <div className="w-full flex justify-center flex-col px-1 gap-">
        <FeatureButton>ON</FeatureButton>
        <button className="text-white font-main block">Sustain</button>
      </div>
      <div className=" w-full flex items-center pl-2">
        <span className="text-white font-main">Volume</span>
        <input
          type="range"
          name=""
          id="volumeslider"
          style={{ WebkitAppearance: "none", appearance: "none" }}
          className="-rotate-90 duration-100 ease-linear"
          max="10"
          min="0"
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
