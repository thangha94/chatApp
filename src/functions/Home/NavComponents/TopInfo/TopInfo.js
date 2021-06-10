import React, { useEffect, useRef } from 'react';
import logo from '../../../../images/logo.svg';
import avatar from '../../../../images/avatar.svg';
import {
  faCaretDown,
  faPen,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TopInfo = () => {
  const dropdownRef = useRef(false);

  const toggleDropdown = () => {
    dropdownRef.current.classList.toggle('active');
  };

  useEffect(() => {
    document.addEventListener('click', (e) => {
      let menu = document.querySelector('.dropdown-user');
      if (
        !menu.contains(e.target) &&
        dropdownRef.current.className.indexOf('active') != -1
      ) {
        dropdownRef.current.classList.remove('active');
      }
    });
  }, []);

  return (
    <div className="top-info-container">
      <img src={logo} alt="" />
      <div className="user-info">
        <img src={avatar} alt="" className="user-avatar" />
        <div className="dropdown-user">
          <span className="user-name" onClick={toggleDropdown}>
            Ha Thang <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <ul ref={dropdownRef} className="dropdown-content">
            <li onClick={toggleDropdown}>Logout!</li>
            <li onClick={toggleDropdown}>Update info</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
