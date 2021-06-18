import React, { useEffect } from 'react';
import Message from '../Message/Message';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import waitingImg from '../../../images/waiting.svg';

const Content = () => {
  const { id } = useParams();
  const messageList = useSelector((state) => state.messageList);

  const scrollToBottom = () => {
    var myDiv = document.querySelector('.content-container');
    var myDiv2 = document.querySelector('.content');
    if (myDiv) {
      myDiv2.scrollTop = myDiv.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [JSON.stringify(messageList)]);
  return (
    <>
      {' '}
      {id !== 'main' ? (
        <div className="content-container">
          {messageList.map((item, index) => (
            <Message
              key={index}
              data={{
                myMessage:
                  item.user._id ==
                  JSON.parse(localStorage.getItem('userData'))._id,
                message: item.content,
                owner: item.user.userName,
              }}
            />
          ))}
        </div>
      ) : (
        <>
          <img className="waiting-content main" src={waitingImg} />
        </>
      )}
    </>
  );
};

export default Content;
