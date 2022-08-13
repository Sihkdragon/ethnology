import React from "react";

const PanelADSR = () => {
  return (
    <div className="w-full bg-choc-dark rounded-md border-4  shadow-inner border-choc-dark grid grid-cols-3">
      <div className="bg-white w-full">
        <button className="text-center">Letter Notes</button>
      </div>
      <div className="bg-white w-full">
        <button className="text-center">Release</button>
      </div>
      <div className="bg-white w-full">
        <span>Volume</span>
        <input type="range" name="" id="" />
      </div>
    </div>
  );
};

export default PanelADSR;
