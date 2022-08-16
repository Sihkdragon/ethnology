import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
// import { playSound } from "../../app/helpers/player";
import {
  key_to_note,
  KeyWithInputIndexMin,
  KeyWithInputIndexMax,
} from "../../global/constant";
import { isLetterDisplayed } from "../../global/state";

const PianoKey = ({ note, indeks, pressedKeys }) => {
  const [letterDisplayed] = useAtom(isLetterDisplayed);
  const [className, setClassName] = useState("pianokey");
  const [PressedclassName, setPressedClassName] = useState(false);
  const [isOnPress, setIsOnPress] = useState(false);
  const onKeyDownHandler = () => {
    setIsOnPress(true);
    setPressedClassName(true);
  };
  const onKeyUpHandler = () => {
    setIsOnPress(false);
    setPressedClassName(false);
  };

  useEffect(() => {
    if (indeks >= KeyWithInputIndexMin && indeks <= KeyWithInputIndexMax) {
      pressedKeys.includes(key_to_note[indeks - 19].to) &&
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
      // onClick={() => {
      //   playSound("C4", 2);
      // }}
    >
      <span className="absolute bottom-2 uppercase font-semibold left-3">
        {!letterDisplayed
          ? ""
          : key_to_note.find((keynote) => {
              return keynote.from === note;
            })
          ? key_to_note[indeks - 19].to
          : " "}
      </span>
    </button>
  );
};

export default PianoKey;
