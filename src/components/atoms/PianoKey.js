import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
import { playSound } from "../../app/service/player";
import { note_to_key } from "../../global/constant";
import {
  isLetterDisplayed,
  isSustainON,
  SampleActive,
  Volume,
} from "../../global/state";

const PianoKey = ({ note, indeks }) => {
  const [isSustaiOn] = useAtom(isSustainON);
  const [ActiveSample] = useAtom(SampleActive);
  const [SampleVolume] = useAtom(Volume);
  const [letterDisplayed] = useAtom(isLetterDisplayed);
  const [className, setClassName] = useState("pianokey");
  const [PressedclassName, setPressedClassName] = useState(false);
  const onKeyDownHandler = () => {
    setPressedClassName(true);
  };
  const onKeyUpHandler = () => {
    setPressedClassName(false);
  };

  useEffect(() => {
    if (note.length > 2) {
      setClassName("pianokeyflat");
    }
  }, []);

  return (
    <button
      className={`${className} ${PressedclassName ? "pressed" : ""}`}
      onMouseDown={onKeyDownHandler}
      onMouseUp={onKeyUpHandler}
      onClick={() => {
        playSound(note, isSustaiOn ? 1 : 0, ActiveSample, SampleVolume);
      }}
    >
      <span className="absolute bottom-2 uppercase font-semibold left-3">
        {!letterDisplayed
          ? ""
          : note_to_key.find((keynote) => {
              return keynote.from === note;
            })
          ? note_to_key[indeks - 12].to
          : " "}
      </span>
    </button>
  );
};

export default PianoKey;
