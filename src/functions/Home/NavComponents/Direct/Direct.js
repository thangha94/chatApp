import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getAllUser } from '../../../../apis/other.api';
import { changeObjectChat } from '../../../../redux/actions/popupChat.action';
import { setUserList } from '../../../../redux/actions/users.action';
import directAvatar from '../../../../images/undraw_female_avatar_w3jk.svg';

const Direct = ({ toggleMenu }) => {
  // const [users, setUsers] = useState([]);
  const userList = useSelector((state) => state.userList);
  const history = useHistory();
  const dispatch = useDispatch();
  const initData = async () => {
    let result = await getAllUser();
    if (!result.errorStatus) {
      // setUsers(result.data);
      dispatch(setUserList(result.data));
    }
  };
  useEffect(() => {
    initData();
  }, []);

  // useEffect(() => {
  //   setUsers()
  // }, [JSON.stringify(userList)]);

  const changeChannel = (user) => {
    // dispatch(changeObjectChat({ ...user, type: 'direct' }));
    history.push({
      pathname: `/home/type/direct/t/${user._id}`,
    });
    toggleMenu();
  };
  return (
    <div className="direct-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faEnvelope} /> Direct
      </span>
      <ul>
        {userList.map((user, index) => {
          return (
            user._id != JSON.parse(localStorage.getItem('userData'))._id && (
              <li
                onClick={() => changeChannel(user)}
                key={index}
                className={`person-status ${user.status ? 'active' : ''} `}
              >
                <img src={directAvatar} alt="Avatar" />
                <span className="title-object">{user.userName}</span>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Direct;
