import User from './components/User';
import TimePicker from './components/TimePicker';
import Schedule from './components/Schedule';

const Right = () => {
  return (
    <div className="wd-flex wd-flex-col wd-justify-center wd-items-center">
      <div>
        <User />
      </div>
      <div>
        <TimePicker />
      </div>
      <div>
        <Schedule />
      </div>
    </div>
  );
};
export default Right;
