import React, { useEffect, useRef } from 'react';
import { history, useHistory } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import avatar from '../../../../images/avatar.svg';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TopInfo = () => {
  const dropdownRef = useRef(false);
  const history = useHistory();

  const toggleDropdown = () => {
    dropdownRef.current.classList.toggle('active');
  };

  useEffect(() => {
    document.addEventListener('click', (e) => {
      let menu = document.querySelector('.dropdown-user');
      if (
        menu &&
        !menu.contains(e.target) &&
        dropdownRef &&
        dropdownRef.current.className.indexOf('active') != -1
      ) {
        dropdownRef.current.classList.remove('active');
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem('tokenId');
    history.push({
      pathname: '/login',
    });
  };

  const goHome = () => {
    history.push({
      pathname: '/home/main',
    });
  };

  return (
    <div className="top-info-container">
      <div className="app-info" onClick={goHome}>
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
            {localStorage.getItem('userData') &&
              JSON.parse(localStorage.getItem('userData')).userName}
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <ul ref={dropdownRef} className="dropdown-content">
            <li
              onClick={() => {
                toggleDropdown();
                logout();
              }}
            >
              Logout!
            </li>
            <li onClick={toggleDropdown}>Update info</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
