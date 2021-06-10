import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Recent = () => {
  return (
    <div className="recent-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faStar} /> Recent
      </span>
      <ul>
        <li># JavaScript</li>
        <li># React</li>
        <li>@ Thuy Hang</li>
      </ul>
    </div>
  );
};

export default Recent;
