import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <span># Java Script</span>
        <span>2 users</span>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search message" />
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

export default Header;
