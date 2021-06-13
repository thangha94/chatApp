import React from 'react';
import Message from '../Message/Message';

const Content = () => {
  return (
    <div className="content-container">
      <Message
        data={{
          myMessage: false,
          message: `This is my content Ha Thangfew seconds ago
This is my content Ha Thangfew seconds ago
This is my content`,
          owner: 'Ha Thang',
        }}
      />
      <Message
        data={{
          myMessage: false,
          message: `This is my content`,
          owner: 'Ha Lien',
        }}
      />
      <Message
        data={{ myMessage: true, message: `This is my content Really long` }}
      />
      <Message
        data={{
          myMessage: false,
          message: `This is my content`,
          owner: 'Thuy hang',
        }}
      />
      <Message data={{ myMessage: true, message: `This is my content` }} />
    </div>
  );
};

export default Content;
