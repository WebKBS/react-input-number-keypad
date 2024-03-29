import { Input } from '../ui/input';

const NumericInput = () => {
  return (
    <Input
      type="text"
      placeholder="기본 보증금 입력"
      pattern="[0-9]*"
      inputMode="numeric"
      className="text-right border-red-500"
    />
  );
};

export default NumericInput;