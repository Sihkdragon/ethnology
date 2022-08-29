import React from "react";
import InstrumentView from "../organisms/InstrumentView";
import LeftCenterGroup from "../organisms/LeftCenterGroup";
import Feature from "../organisms/Feature";
import Piano from "../organisms/Piano";
import SampleChoicer from "../organisms/SampleChoicer";

const MainLayout = () => {
  return (
    <section className="bg-transparent w-full flex flex-col h-screen sm:h-full m-auto ">
      <div className="pt-2">
        <h1 className="text-pastel-dark text-center font-main sm:text-lg font-semibold">
          Ethnology
        </h1>
        <p className="text-center font-main text-pastel-dark sm:mb-2 text-sm sm:text-base">
          Virtual Studio Technology Indonesia Instrument
        </p>
      </div>
      <div className="w-full h-full flex flex-col sm:grid grid-cols-2 justify-between sm:gap-y-4 sm:gap-x-2 md:gap-x-20">
        <InstrumentView InstrumentNameProps={"gambang"} />
        <SampleChoicer />
        <LeftCenterGroup />
        <Feature />
        <Piano />
      </div>
    </section>
  );
};

export default MainLayout;
