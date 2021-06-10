import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
  faArrowLeft,
  faCaretRight,
  faInfo,
  faLongArrowAltLeft,
  faPen,
  faQuestion,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <span className="about__title">About # JavaScript </span>
      <div className="about-detail">
        <span className="about-detail__title title">
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faInfo} />
          </span>
          Channel Detail
        </span>
      </div>
      <div className="about-top-poster">
        <span className="about-top-poster__title title">
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          Top Posters
        </span>
      </div>
      <div className="about-created">
        <span className="about-created__title title">
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
          <span className="adjust-icon">
            <FontAwesomeIcon icon={faPen} />
          </span>
          created By
        </span>
      </div>
    </div>
  );
};

export default About;
