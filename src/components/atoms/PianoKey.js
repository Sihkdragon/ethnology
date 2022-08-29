import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
import { playSound } from "../../app/service/player";
import {
  note_to_key,
  key_to_note,
  KeyWithInputIndexMin,
  KeyWithInputIndexMax,
  RESPONSIVE_KEYS,
} from "../../global/constant";
import {
  isLetterDisplayed,
  isSustainON,
  SampleActive,
  Volume,
} from "../../global/state";

const PianoKey = ({ note, indeks, PressedNote, pressedKeys }) => {
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
    if (indeks >= KeyWithInputIndexMin && indeks <= KeyWithInputIndexMax) {
      if (key_to_note[pressedKeys] === note) {
        setPressedClassName(true);
        setTimeout(() => {
          setPressedClassName(false);
          pressedKeys = "";
        }, 200);
      }
    }
    if (note === PressedNote) {
      setPressedClassName(true);
      setTimeout(() => {
        setPressedClassName(false);
        PressedNote = "";
      }, 200);
    }
    if (note.length > 2) {
      if (RESPONSIVE_KEYS.includes(note)) {
        setClassName("pianokeyflatResp");
      } else {
        setClassName("pianokeyflat");
      }
    } else {
      if (RESPONSIVE_KEYS.includes(note)) {
        setClassName("pianokeyResp");
      }
    }
  }, [pressedKeys, PressedNote]);

  return (
    <button
      className={`my-shadow ${className} ${PressedclassName ? "pressed" : ""}`}
      onMouseDown={onKeyDownHandler}
      onMouseUp={onKeyUpHandler}
      onClick={() => {
        playSound(note, isSustaiOn ? 1 : 0, ActiveSample, SampleVolume);
      }}
    >
      <span className="absolute bottom-2 uppercase font-semibold left-3 hidden sm:inline">
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
