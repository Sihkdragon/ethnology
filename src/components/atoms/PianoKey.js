import { useAtom } from "jotai";
import { key_to_note } from "../../global/constant";
import { isLetterDisplayed } from "../../global/state";

const PianoKey = ({ note, indeks }) => {
  const [letterDisplayed] = useAtom(isLetterDisplayed);
  if (note.length > 2) {
    return (
      <div className=" cursor-pointer relative z-10 -mx-4 bg-black text-white h-4/5 w-8  rounded-b text-center hover:bg-slate-900">
        <span className="absolute bottom-2 uppercase font-semibold left-3">
          {!letterDisplayed
            ? ""
            : key_to_note.find((keynote) => {
                return keynote.from === note;
              })
            ? key_to_note[indeks - 19].to
            : " "}
        </span>
      </div>
    );
  }
  return (
    <div className="relative cursor-pointer bg-white text-black h-full w-11 border-black border-x border-b rounded-sm text-center hover:bg-slate-300">
      <span className="absolute bottom-2 uppercase font-semibold left-4">
        {!letterDisplayed
          ? ""
          : key_to_note.find((keynote) => {
              return keynote.from === note;
            })
          ? key_to_note[indeks - 19].to
          : " "}
      </span>
    </div>
  );
};

export default PianoKey;
