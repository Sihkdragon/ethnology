import React from "react";
import InstrumentView from "../organisms/InstrumentView";
import LeftCenterGroup from "../organisms/LeftCenterGroup";
import PanelADSR from "../organisms/PanelADSR";
import Piano from "../organisms/Piano";
import SampleChoicer from "../organisms/SampleChoicer";

const MainLayout = () => {
  return (
    <section className="bg-transparent w-full flex flex-col h-full justify-between m-auto ">
      <div className="pt-2">
        <h1 className="text-pastel-dark text-center font-main text-lg font-semibold">
          Ethnology
        </h1>
        <p className="text-center font-main text-pastel-dark mb-2">
          Virtual Studio Technology Indonesia Instrument
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-x-56 ">
        <InstrumentView InstrumentNameProps={"gambang"} />
        <SampleChoicer />
      </div>
      <div className="w-full h-24 grid grid-cols-2 gap-x-56">
        <LeftCenterGroup />
        <PanelADSR />
      </div>
      <div className="h-44 border border-black rounded border-y-2 ">
        <Piano />
      </div>
    </section>
  );
};

export default MainLayout;
