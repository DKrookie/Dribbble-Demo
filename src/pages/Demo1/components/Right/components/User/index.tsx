import { useState } from 'react';
import avatar from '../../../../public/imgs/avatar.jpg';

const User = () => {
  return (
    <div className="wd-flex wd-flex-col wd-items-center wd-text-sm wd-text-gray-500 wd-leading-loose">
      <div className="wd-w-50 wd-h-50 wd-rounded-full wd-overflow-hidden wd-my-10">
        <img className="wd-w-pull wd-h-full" src={avatar} alt="avatar" />
      </div>
      <p className="wd-text-black wd-text-2xl wd-font-bold">Angelina Jole</p>
      <p>Economics | 6th Semester</p>
      <p>329276180</p>
    </div>
  );
};

export default User;
