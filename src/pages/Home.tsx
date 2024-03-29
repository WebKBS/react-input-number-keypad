import DecimalInput from '@/components/Inputs/DecimalInput';
import NumericInput from '@/components/Inputs/NumericInput';
import TestInput from '@/components/Inputs/TestInput';

const Home = () => {
  return (
    <div className="container py-20">
      <div className="max-w-xl mx-auto">
        <h1 className="mb-8">모바일에서 input number 키패드 테스트</h1>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="mb-2">Numeric</h2>
            <NumericInput />
          </div>
          <div>
            <h2 className="mb-2">Decimal</h2>
            <DecimalInput />
          </div>
          <div>
            <h2 className="mb-2">TEST</h2>
            <TestInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
