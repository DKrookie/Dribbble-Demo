import {
  AccountCircleOutlined,
  SearchOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import './index.css';

const Headre = () => {
  return (
    <header className="wd-flex wd-items-center wd-py-10">
      <div className="wd-leading-0 wd-w-1/10 wd-text-center">
        <AccountCircleOutlined className="wd-text-blue-500 !wd-text-5xl" />
      </div>
      <div className="wd-flex wd-flex-1 wd-justify-between wd-items-center wd-px-10">
        <div>
          <div className="wd-font-semibold wd-text-2xl">
            Halo Angelinav<span className="wd-font-normal">👋</span>
          </div>
          <div className="wd-text-xs wd-text-true-gray-400">
            Let's do some productive activities today
          </div>
        </div>
        <div className="wd-flex wd-justify-center wd-items-center">
          <div className="wd-flex wd-justify-center wd-items-center wd-rounded-lg wd-px-10px wd-bg-gray-100 wd-h-10">
            <SearchOutlined />
            <input
              className="wd-w-70 wd-outline-none wd-bg-gray-100"
              type="text"
              placeholder="Search anything..."
            />
          </div>
          <div className="notification wd-flex wd-justify-center wd-items-center wd-leading-0 wd-text-center wd-ml-10 wd-w-40px wd-h-40px wd-rounded-1/2 wd-bg-gray-200 wd-relative after:wd-absolute after:wd-w-6px after:wd-h-6px after:wd-bg-blue-500 after:wd-rounded-1/2 after:wd-top-2 after:wd-right-2 hover:wd-cursor-pointer">
            <NotificationsOutlined />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Headre;
