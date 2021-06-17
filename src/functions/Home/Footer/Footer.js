import {
  faFile,
  faFileArchive,
  faImage,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faPlane,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Footer = ({ socket }) => {
  const { id, type } = useParams();
  const channel = useSelector((state) => state.popupChat);
  const userList = useSelector((state) => state.userList);
  const [group, setGroup] = useState(false);

  useEffect(() => {
    if (id !== 'main' && userList) {
      let currentUser = userList.filter((item) => item._id === id)[0];
      setGroup({ ...currentUser, type: 'direct' });
    }
  }, [id, JSON.stringify(userList)]);

  const sendMessage = (e) => {
    if (e.charCode === 13) {
      socket.emit('Client-normal-message', {
        content: e.target.value,
        type: type,
        id,
        // users: [
        //   { _id: id },
        //   { _id: JSON.parse(localStorage.getItem('userData'))._id },
        // ],
        // user: JSON.parse(localStorage.getItem('userData')),
      });
      e.target.value = '';
    }
  };
  return (
    <div className="footer-container">
      <div className="footer-tools left">
        <span className="footer-icon">
          <FontAwesomeIcon icon={faImage} />
        </span>
        <span className="footer-icon">
          <FontAwesomeIcon icon={faPaperclip} />
        </span>
        <span className="footer-icon">
          <FontAwesomeIcon icon={faSmile} />
        </span>
      </div>
      <input
        className="message-input"
        type="text"
        name="messageInput"
        placeholder="Aa..."
        onKeyPress={sendMessage}
      />
      <div className="footer-tools right">
        <span className="footer-icon">
          <FontAwesomeIcon icon={faMicrophone} />
        </span>
        <span className="footer-icon send">
          <FontAwesomeIcon icon={faPaperPlane} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
