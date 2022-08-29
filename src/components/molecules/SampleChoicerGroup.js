import { InstrumentList } from "../../global/constant";
import SampleChoicerGrid from "../atoms/SampleChoicerGrid";
const SampleChoicerGroup = ({ InstrumentSelected }) => {
  return (
    <ul className="h-36 sm:h-fit mt-2 flex-col flex justify-between sm:overflow-hidden">
      {InstrumentList.map((instrument, index) => {
        return <SampleChoicerGrid key={index} instrumentName={instrument} />;
      })}
    </ul>
  );
};

export default SampleChoicerGroup;
