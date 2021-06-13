import React from 'react';
import avatar from '../../../images/avatar.svg';
const Message = ({ data }) => {
  return (
    <div className={`message-container ${data.myMessage ? 'my-message' : ''}`}>
      <span className="message">
        {!data.myMessage ? (
          <>
            <img className="message__logo" src={avatar} />
            <span className="message_content">
              <span className="message-content__top">
                <span className="message-content__owner">{data.owner}</span>
                <span className="message-content__time">few seconds ago</span>
              </span>
              <span className="message-content__bottom">{data.message}</span>
            </span>{' '}
          </>
        ) : (
          <span className="message-content__bottom">{data.message}</span>
        )}
      </span>
    </div>
  );
};

export default Message;
