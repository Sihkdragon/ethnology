import React from "react";
import PianoKey from "../atoms/PianoKey";
import { key } from "../../global/constant";

const Piano = () => {
  return (
    <div className="rounded-t-sm bg-white h-full flex">
      {key.map((key, index) => {
        return <PianoKey note={key} key={index} />;
      })}
    </div>
  );
};

export default Piano;
