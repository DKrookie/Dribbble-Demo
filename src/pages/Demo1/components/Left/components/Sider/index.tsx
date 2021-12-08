import {
  AlignVerticalBottomOutlined,
  ArticleOutlined,
  DonutSmallOutlined,
  DateRangeOutlined,
  Brightness5Outlined,
  LogoutOutlined,
} from '@mui/icons-material';
import './index.css';

const Sider = () => {
  const onClick = (e: any) => (window.location.hash = e.currentTarget.id);

  return (
    <div className="wd-flex wd-flex-col wd-items-center wd-justify-between wd-h-full wd-pb-20">
      <div className="wd-flex wd-flex-col wd-justify-center wd-items-center">
        <div
          id="AlignVerticalBottomOutlined"
          onClick={onClick}
          className="AlignVerticalBottomOutlined wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-rounded-xl wd-mb-10 wd-cursor-pointer">
          <div className="a wd-p-0.5 wd-leading-0 wd-rounded-5px">
            <AlignVerticalBottomOutlined className="b !wd-text-lg wd-text-gray-400" />
          </div>
        </div>
        <div
          id="ArticleOutlined"
          onClick={onClick}
          className="wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-rounded-xl wd-mb-10 wd-cursor-pointer">
          <div className="a wd-p-0.5 wd-leading-0 wd-rounded-5px">
            <ArticleOutlined className="b !wd-text-lg wd-text-gray-400" />
          </div>
        </div>
        <div
          id="DonutSmallOutlined"
          onClick={onClick}
          className="wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-rounded-xl wd-mb-10 wd-cursor-pointer">
          <div className="a wd-p-0.5 wd-leading-0 wd-rounded-5px">
            <DonutSmallOutlined className="b !wd-text-lg wd-text-gray-400" />
          </div>
        </div>
        <div
          id="DateRangeOutlined"
          onClick={onClick}
          className="wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-rounded-xl wd-mb-10 wd-cursor-pointer">
          <div className="a wd-p-0.5 wd-leading-0 wd-rounded-5px">
            <DateRangeOutlined className="b !wd-text-lg wd-text-gray-400" />
          </div>
        </div>
        <div
          id="Brightness5Outlined"
          onClick={onClick}
          className="wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-rounded-xl wd-cursor-pointer">
          <div className="a wd-p-0.5 wd-leading-0 wd-rounded-5px">
            <Brightness5Outlined className="b !wd-text-lg wd-text-gray-400" />
          </div>
        </div>
      </div>
      <div className="wd-w-48px wd-h-48px wd-flex wd-justify-center wd-items-center wd-cursor-pointer">
        <LogoutOutlined className="!wd-text-lg wd-text-gray-400" />
      </div>
    </div>
  );
};
export default Sider;
