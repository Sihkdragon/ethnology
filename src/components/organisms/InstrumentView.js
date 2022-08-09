import React from "react";
import BigPanel from "../atoms/BigPanel";
import angklung from "../../assets/img/angklung.jpg";
import bonang from "../../assets/img/bonang.jpg";
import gambang from "../../assets/img/gambang.jpg";
import saron from "../../assets/img/saron.png";
const InstrumentView = ({ InstrumentNameProps }) => {
  let Instrumenname = angklung;
  if (InstrumentNameProps === "angklung") {
    Instrumenname = angklung;
  } else if (InstrumentNameProps === "bonang") {
    Instrumenname = bonang;
  } else if (InstrumentNameProps === "gambang") {
    Instrumenname = gambang;
  } else if (InstrumentNameProps === "saron") {
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
