import React from "react";
import Knob from "../atoms/Knob";

const PanelADSR = () => {
  return (
    <div className="w-full bg-white rounded-md border-4  shadow-inner border-choc-dark ">
      <div className="grid grid-cols-4 place-items-center content-center h-full">
        <Knob />
        <Knob />
        <Knob />
        <Knob />
      </div>
    </div>
  );
};

export default PanelADSR;
