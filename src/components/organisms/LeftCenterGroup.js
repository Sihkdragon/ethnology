import React from "react";
import Knob from "../atoms/Knob";
import InstrumentNamePanel from "../molecules/InstrumentNamePanel";

const LeftCenterGroup = () => {
  return (
    <div className="flex justify-between w-1/2">
      <Knob />
      <InstrumentNamePanel />
    </div>
  );
};

export default LeftCenterGroup;
