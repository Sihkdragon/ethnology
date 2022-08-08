import React from "react";
import Knob from "../atoms/Knob";
import InstrumentNamePanel from "../molecules/InstrumentNamePanel";

const LeftCenterGroup = () => {
  return (
    <div className="flex justify-between w-[550px] ">
      <Knob />
      <InstrumentNamePanel />
    </div>
  );
};

export default LeftCenterGroup;
