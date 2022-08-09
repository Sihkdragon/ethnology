import { CheckIcon } from "@heroicons/react/solid";

const SampleCheckbox = ({ isSelected = false }) => {
  return (
    <div className="w-5 h-5 border-2 border-choc-light rounded">
      {isSelected && <CheckIcon className="text-choc-semi" />}
    </div>
  );
};

export default SampleCheckbox;
