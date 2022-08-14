import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
import { key_to_note } from "../../global/constant";
import { isLetterDisplayed } from "../../global/state";

const PianoKey = ({ note, indeks, pressedKeys }) => {
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
    console.log(pressedKeys);
    if (note.length > 2) {
      setClassName("pianokeyflat");
    }
  }, []);

  return (
    <button
      className={`${className} ${PressedclassName ? "pressed" : ""}`}
      onMouseDown={onKeyDownHandler}
      onMouseUp={onKeyUpHandler}
    >
      <span className="absolute bottom-2 uppercase font-semibold left-4">
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
