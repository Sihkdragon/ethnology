import React from "react";
import InstrumentView from "../organisms/InstrumentView";
import LeftCenterGroup from "../organisms/LeftCenterGroup";
import PanelADSR from "../organisms/PanelADSR";
import Piano from "../organisms/Piano";
import SampleChoicer from "../organisms/SampleChoicer";

const MainLayout = () => {
  return (
    <section className="bg-transparent  w-full h-full relative pt-1">
      <h1 className="text-pastel-dark text-center font-main text-lg font-semibold">
        Ethnology
      </h1>
      <p className="text-center font-main text-pastel-dark mb-2">
        Virtual Studio Technology Indonesia Instrument
      </p>
      <div className=" h-[280px] w-full grid grid-cols-2 gap-56">
        <InstrumentView InstrumentNameProps={"gambang"} />
        <SampleChoicer />
      </div>
      <div className="w-full grid grid-cols-2 gap-56 my-6">
        <LeftCenterGroup />
        <PanelADSR />
      </div>
      <div className="mx-auto absolute bottom-0 left-0 right-0 h-44 border border-black rounded border-y-2">
        <Piano />
      </div>
    </section>
  );
};

export default MainLayout;
