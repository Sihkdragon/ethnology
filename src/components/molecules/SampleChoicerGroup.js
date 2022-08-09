import { InstrumentList } from "../../global/constant";
import SampleChoicerGrid from "../atoms/SampleChoicerGrid";
const SampleChoicerGroup = ({ InstrumentSelected }) => {
  return (
    <ul className="my-4 flex-col flex">
      {InstrumentList.map((instrument, index) => {
        return <SampleChoicerGrid key={index} instrumentName={instrument} />;
      })}
    </ul>
  );
};

export default SampleChoicerGroup;
