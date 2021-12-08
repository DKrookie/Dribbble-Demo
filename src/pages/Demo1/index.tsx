import Left from './components/Left';
import Right from './components/Right';

const Demo1 = () => {
  return (
    <div className="wd-flex wd-w-pull wd-h-full">
      <div className="wd-w-7/10">
        <Left />
      </div>
      <div className="wd-flex-1 wd-bg-blue-200 wd-bg-opacity-30">
        <Right />
      </div>
    </div>
  );
};
export default Demo1;