import React from "react";
import InstrumentView from "../organisms/InstrumentView";
import LeftCenterGroup from "../organisms/LeftCenterGroup";
import PanelADSR from "../organisms/PanelADSR";
import Piano from "../organisms/Piano";
import SampleChoicer from "../organisms/SampleChoicer";

const MainLayout = () => {
  return (
    <section className="bg-transparent w-full h-full relative">
      <div className="flex justify-between">
        <InstrumentView />
        <SampleChoicer />
      </div>
      <div className="flex justify-between">
        <LeftCenterGroup />
        <PanelADSR />
      </div>
      <div className="bg-white mx-auto absolute bottom-0 left-0 right-0 h-52">
        <Piano />
      </div>
    </section>
  );
};

export default MainLayout;
