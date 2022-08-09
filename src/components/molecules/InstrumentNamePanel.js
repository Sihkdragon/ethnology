import React from "react";

const InstrumentNamePanel = ({ InstrumentName }) => {
  return (
    <div className="bg-choc-light h-24 w-96 rounded-md border-4  shadow-inner border-choc-dark py-5 text-center">
      <span className="text-white font-secondary text-4xl capitalize tracking-widest ">
        {InstrumentName}
      </span>
    </div>
  );
};

export default InstrumentNamePanel;
