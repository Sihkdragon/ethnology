import { InstrumentList } from "../../global/constant";

const SampleChoicerGroup = () => {
  return (
    <ul className="my-4 flex-col flex">
      {InstrumentList.map((instrument, index) => {
        return (
          <li
            key={index}
            className="flex items-center gap-4 cursor-pointer hover:bg-slate-300 rounded-sm py-2"
          >
            <div className="border-b  border-slate-700 font-main text-xl text-choc-light capitalize border-opacity-60 w-11/12">
              {instrument}
            </div>
            <div className="w-5 h-5 border-2 border-choc-light rounded"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default SampleChoicerGroup;
