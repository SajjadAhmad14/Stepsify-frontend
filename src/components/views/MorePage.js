import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserCircle } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { ImUser, ImTarget } from 'react-icons/im';
import { GoMail } from 'react-icons/go';
import { IoHelpCircleSharp } from 'react-icons/io5';
import isLoggedIn from './isLoggedIn';

const MorePage = () => {
  const user = sessionStorage.getItem('user');
  const userInfo = JSON.parse(user);
  const history = useHistory();
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  const handleClick = () => {
    history.push('/progresspage');
  };
  return (
    <div className="more-page">
      <div className="more-nav text-center">
        <div>
          <FaAngleLeft className="left-arrow" onClick={handleClick} />
        </div>
        <div className="add-steps-heading">
          <h1>More</h1>
        </div>
      </div>
      <div className="user-info">
        <div><FaUserCircle className="user-avatar" /></div>
        <div className="user-name">
          {userInfo.name}
          <div>{userInfo.sex}</div>
        </div>
      </div>
      <div className="user-panel">
        <div className="flex">
          <div><ImTarget className="icon" /></div>
          <div className="icon-text">Your goal</div>
        </div>
        <div className="flex">
          <div><GoMail className="icon" /></div>
          <div className="icon-text">Mailing list</div>
        </div>
        <div className="flex">
          <div><ImUser className="icon" /></div>
          <div className="icon-text">Your Profile</div>
        </div>
        <div className="flex">
          <div><FcSettings className="icon" /></div>
          <div className="icon-text">Settings</div>
        </div>
        <div className="flex">
          <div><IoHelpCircleSharp className="icon" /></div>
          <div className="icon-text">Help</div>
        </div>
      </div>
    </div>
  );
};

export default MorePage;
