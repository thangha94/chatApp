import React, { useEffect, useRef } from 'react';
import logo from '../../../../images/logo.svg';
import avatar from '../../../../images/avatar.svg';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
      <div className="app-info">
        <img src={logo} alt="" />
        <div className="app-name">
          <span style={{ '--i': 1 }}>C</span>
          <span style={{ '--i': 2 }}>h</span>
          <span style={{ '--i': 3 }}>i</span>
          <span style={{ '--i': 4 }}>t</span>
          <span style={{ '--i': 5 }}>c</span>
          <span style={{ '--i': 6 }}>h</span>
          <span style={{ '--i': 7 }}>a</span>
          <span style={{ '--i': 8 }}>t</span>
        </div>
      </div>

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
