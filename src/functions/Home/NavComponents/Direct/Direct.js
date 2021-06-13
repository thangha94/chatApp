import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getAllUser } from '../../../../apis/other.api';

const Direct = () => {
  const [users, setUsers] = useState([]);
  const initData = async () => {
    let result = await getAllUser();
    if (!result.errorStatus) {
      setUsers(result.data);
    }
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="direct-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faEnvelope} /> Direct
      </span>
      <ul>
        {users.map((user, index) => {
          return (
            <li
              key={index}
              className={`person-status ${index % 2 == 0 ? 'active' : ''} `}
            >
              @ {user.userName}
            </li>
          );
        })}

        {/* <li className="person-status active">@ Thuy Hang</li>
        <li className="person-status">@ Ha Lien</li> */}
      </ul>
    </div>
  );
};

export default Direct;
