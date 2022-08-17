import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
import { playSound } from "../../app/service/player";
import {
  key_to_note,
  KeyWithInputIndexMin,
  KeyWithInputIndexMax,
} from "../../global/constant";
import {
  isLetterDisplayed,
  isSustainON,
  SampleActive,
} from "../../global/state";

const PianoKey = ({ note, indeks, pressedKeys }) => {
  const [isSustaiOn] = useAtom(isSustainON);
  const [ActiveSample] = useAtom(SampleActive);
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
    if (indeks >= KeyWithInputIndexMin && indeks <= KeyWithInputIndexMax) {
      pressedKeys.includes(key_to_note[indeks - 12].to) &&
        setPressedClassName(true);
    }
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
        playSound(note, isSustaiOn ? 1 : 0, ActiveSample);
      }}
    >
      <span className="absolute bottom-2 uppercase font-semibold left-3">
        {!letterDisplayed
          ? ""
          : key_to_note.find((keynote) => {
              return keynote.from === note;
            })
          ? key_to_note[indeks - 12].to
          : " "}
      </span>
    </button>
  );
};

export default PianoKey;
