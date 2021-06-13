import {
  faFile,
  faFileArchive,
  faImage,
  faPaperclip,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = ({ socket }) => {
  const sendMessage = (e) => {
    if (e.charCode === 13) {
      socket.emit('Client-normal-message', {
        content: e.target.value,
      });
    }
    console.log(e.charCode);
  };
  return (
    <div className="footer-container">
      <div className="footer-tools">
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
    </div>
  );
};

export default Footer;
