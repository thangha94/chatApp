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
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const About = () => {
  const [title, setTitle] = useState('');
  const { id, type } = useParams();
  const roomList = useSelector((state) => state.roomList);

  useEffect(() => {
    if (type == 'direct') {
      setTitle('@ Private Room');
    } else {
      let room = roomList.filter((item) => item._id == id)[0];
      if (room) {
        setTitle(`About # ${room.name}`);
      }
    }
  }, [id, JSON.stringify(roomList)]);
  return (
    <div className="about-container">
      <span className="about__title">{title} </span>
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
          Created By
        </span>
      </div>
    </div>
  );
};

export default About;
