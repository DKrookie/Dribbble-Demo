import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';

const Left = () => {
  return (
    <div className="wd-w-full wd-h-full wd-flex wd-flex-col wd-justify-start wd-bg-light-50">
      <Header />
      <div className="wd-flex wd-flex-1 wd-justify-start">
        <div className="wd-w-1/10 wd-min-w-1/10">
          <Sider />
        </div>
        <div className="wd-flex-1 wd-p-10">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Left;
