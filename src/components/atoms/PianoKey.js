import React from "react";

const PianoKey = ({ note }) => {
  if (note.length > 1) {
    return (
      <div className="cursor-pointer relative -mx-4 bg-black text-white h-4/5 w-8  rounded-b text-center hover:bg-slate-900"></div>
    );
  }
  return (
    <div className=" cursor-pointer bg-white text-black h-full w-11 border-black border-x border-b rounded-sm text-center hover:bg-slate-300">
      {note}
    </div>
  );
};

export default PianoKey;
