import React from "react";
import BigPanel from "../atoms/BigPanel";
import SampleChoicerGroup from "../molecules/SampleChoicerGroup";
const SampleChoicer = () => {
  return (
    <BigPanel>
      <div className="w-full h-full p-3">
        <h5 className="text-choc-dark text-2xl font-secondary font-semibold">
          Pilih Sampel
        </h5>
        <SampleChoicerGroup />
      </div>
    </BigPanel>
  );
};

export default SampleChoicer;
