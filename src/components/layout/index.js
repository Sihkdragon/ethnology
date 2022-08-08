import React from "react";
import InstrumentView from "../organisms/InstrumentView";
import LeftCenterGroup from "../organisms/LeftCenterGroup";
import PanelADSR from "../organisms/PanelADSR";
import Piano from "../organisms/Piano";
import SampleChoicer from "../organisms/SampleChoicer";

const MainLayout = () => {
  return (
    <section className="bg-transparent w-full h-full relative">
      <h1 className="text-yellow-600 text-center">Ethnology</h1>
      <p className="text-center text-yellow-400 mb-2">
        Virtual Studio Technology Indoensia Instrument
      </p>
      <div className="flex justify-between">
        <InstrumentView />
        <SampleChoicer />
      </div>
      <div className="flex justify-between my-5">
        <LeftCenterGroup />
        <PanelADSR />
      </div>
      <div className="bg-white mx-auto absolute bottom-0 left-0 right-0 h-44">
        <Piano />
      </div>
    </section>
  );
};

export default MainLayout;
