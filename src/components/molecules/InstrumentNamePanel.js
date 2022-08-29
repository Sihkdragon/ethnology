import React from "react";
import { SampleActive } from "../../global/state";
import { useAtom } from "jotai";
const InstrumentNamePanel = () => {
  const [ActiveSampleName] = useAtom(SampleActive);
  return (
    <div className=" bg-choc-light hidden sm:block h-24 w-full rounded-md border-4 border-choc-dark py-5 text-center my-shadow-sec">
      <span className="text-white font-secondary text-4xl capitalize tracking-widest ">
        {ActiveSampleName}
      </span>
    </div>
  );
};

export default InstrumentNamePanel;
