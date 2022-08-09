import React from "react";
import BigPanel from "../atoms/BigPanel";
import angklung from "../../assets/img/angklung.jpg";
import bonang from "../../assets/img/bonang.jpg";
import gambang from "../../assets/img/gambang.jpg";
import saron from "../../assets/img/saron.png";
import { SampleActive } from "../../global/state";
import { useAtom } from "jotai";
const InstrumentView = () => {
  const [InstrumentName] = useAtom(SampleActive);
  let Instrumenname = angklung;
  if (InstrumentName === "angklung") {
    Instrumenname = angklung;
  } else if (InstrumentName === "bonang") {
    Instrumenname = bonang;
  } else if (InstrumentName === "gambang") {
    Instrumenname = gambang;
  } else if (InstrumentName === "saron") {
    Instrumenname = saron;
  }
  return (
    <BigPanel>
      <figure className="w-full h-full flex justify-center items-center">
        <img src={Instrumenname} alt="Instrument" className="w-60 mx-auto" />
      </figure>
    </BigPanel>
  );
};

export default InstrumentView;
