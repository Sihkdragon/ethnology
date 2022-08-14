import React from "react";
import PianoKey from "../atoms/PianoKey";
import { key } from "../../global/constant";
import { useState } from "react";

const Piano = () => {
  const [keyPressed, setKeyPressed] = useState(["X"]);
  return (
    <div className="rounded-t-sm bg-white h-full flex">
      {key.map((key, index) => {
        return (
          <PianoKey
            note={key}
            key={index}
            indeks={index}
            pressedKeys={keyPressed}
          />
        );
      })}
    </div>
  );
};

export default Piano;
