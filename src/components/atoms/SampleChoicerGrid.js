import { useEffect, useState } from "react";
import { SampleActive } from "../../global/state";
import SampleCheckbox from "./SampleCheckbox";
import { useAtom } from "jotai";

const SampleChoicerGrid = ({ instrumentName }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [SampleName, setSampleName] = useAtom(SampleActive);
  const SampleSelectHandler = () => {
    setSampleName(instrumentName);
  };
  useEffect(() => {
    if (SampleName === instrumentName) {
      setIsSelected(true);
    } else if (SampleName !== instrumentName) {
      setIsSelected(false);
    }
  }, [instrumentName, SampleName]);
  return (
    <li
      className="flex items-center gap-4 cursor-pointer hover:bg-slate-300 rounded-sm py-2"
      onClick={SampleSelectHandler}
    >
      <div className="border-b  border-slate-700 font-main text-xl text-choc-light capitalize border-opacity-60 w-11/12">
        {instrumentName}
      </div>
      <SampleCheckbox isSelected={isSelected} />
    </li>
  );
};

export default SampleChoicerGrid;
