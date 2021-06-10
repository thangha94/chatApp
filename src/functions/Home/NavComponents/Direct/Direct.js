import {
  faEnvelope,
  faStar,
  faTrafficLight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Direct = () => {
  return (
    <div className="direct-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faEnvelope} /> Direct{' '}
      </span>
      <ul>
        <li className="person-status active">@ Thuy Hang</li>
        <li className="person-status">@ Ha Lien</li>
      </ul>
    </div>
  );
};

export default Direct;
