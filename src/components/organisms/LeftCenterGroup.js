import React from "react";
import InstrumentNamePanel from "../molecules/InstrumentNamePanel";

const LeftCenterGroup = () => {
  return (
    <div className="flex justify-between w-full ">
      <InstrumentNamePanel InstrumentName={"saron"} />
    </div>
  );
};

export default LeftCenterGroup;
