import React, { useEffect, useRef } from 'react';
import { history, useHistory } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import avatar from '../../../../images/avatar.svg';
import {
  faCaretDown,
  faCog,
  faLongArrowAltUp,
  faPersonBooth,
  faQuestionCircle,
  faSignOutAlt,
  faUserCircle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TopInfo = ({ configLoading }) => {
  const dropdownRef = useRef(false);
  const history = useHistory();

  const toggleDropdown = () => {
    dropdownRef.current.classList.toggle('active');
  };

  useEffect(() => {
    let dropdownCallback = (e) => {
      let menu = document.querySelector('.dropdown-user');
      if (
        menu &&
        !menu.contains(e.target) &&
        dropdownRef &&
        dropdownRef.current.className.indexOf('active') != -1
      ) {
        dropdownRef.current.classList.remove('active');
      }
    };
    document.addEventListener('click', dropdownCallback);
    return () => {
      document.removeEventListener('click', dropdownCallback);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('tokenId');
    configLoading(true);
    setTimeout(() => {
      history.replace({
        pathname: '/login',
      });
    }, 500);
  };

  const goHome = () => {
    history.push({
      pathname: '/home/type/channel/t/main',
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
            <span className="user-name__caret">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </span>
          <ul ref={dropdownRef} className="dropdown-content">
            <li>
              <span className="adjust-drd-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              My Profile
            </li>
            <li>
              <span className="adjust-drd-icon">
                <FontAwesomeIcon icon={faUserEdit} />
              </span>
              Edit Profile
            </li>
            <li>
              <span className="adjust-drd-icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              Settings
            </li>
            <li>
              <span className="adjust-drd-icon">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
              Help
            </li>
            <li
              onClick={() => {
                toggleDropdown();
                logout();
              }}
            >
              <span className="adjust-drd-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              Logout!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
