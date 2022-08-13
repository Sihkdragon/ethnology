import React from "react";
import { SampleActive } from "../../global/state";
import { useAtom } from "jotai";
const InstrumentNamePanel = ({ InstrumentName }) => {
  const [ActiveSampleName] = useAtom(SampleActive);
  return (
    <div className="bg-choc-light h-24 w-full rounded-md border-4  shadow-inner border-choc-dark py-5 text-center">
      <span className="text-white font-secondary text-4xl capitalize tracking-widest ">
        {ActiveSampleName}
      </span>
    </div>
  );
};

export default InstrumentNamePanel;
