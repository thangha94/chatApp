import {
  faFilter,
  faSlidersH,
  faStar,
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Channels = () => {
  return (
    <div className="channels-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faSlidersH} /> Channels
        <span className="adjust-title-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </span>
      <ul>
        <li># JavaScript</li>
        <li># React</li>
        <li>@ Thuy Hang</li>
      </ul>
    </div>
  );
};

export default Channels;
