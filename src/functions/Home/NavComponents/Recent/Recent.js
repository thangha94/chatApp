import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { getRecentRooms } from '../../../../apis/other.api';
import { useSelector, useDispatch } from 'react-redux';
import { setRecentList } from '../../../../redux/actions/recents.action';
import { useHistory } from 'react-router-dom';
import directAvatar from '../../../../images/undraw_female_avatar_w3jk.svg';
import groupAvatar from '../../../../images/group-avatar.svg';

const Recent = ({ toggleMenu }) => {
  const recentList = useSelector((state) => state.recentList);
  const dispatch = useDispatch();
  const history = useHistory();
  const initData = async () => {
    let rooms = await getRecentRooms({
      userId: JSON.parse(localStorage.getItem('userData'))._id,
    });
    if (!rooms.errorStatus) {
      dispatch(setRecentList(rooms.data));
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const openChannel = (item) => {
    if (item.name === '') {
      if (
        item.userData[0]._id != JSON.parse(localStorage.getItem('userData'))._id
      ) {
        history.push({
          pathname: `/home/type/direct/t/${item.userData[0]._id}`,
        });
      } else {
        history.push({
          pathname: `/home/type/direct/t/${item.userData[1]._id}`,
        });
      }
    } else {
      history.push({
        pathname: `/home/type/channel/t/${item._id}`,
      });
    }
    toggleMenu();
  };

  return (
    <div className="recent-container nav-sub-container">
      <span className="title">
        <FontAwesomeIcon icon={faStar} /> Recent
      </span>
      <ul>
        {recentList.map((item, index) => {
          if (item.name === '') {
            if (
              item.userData[0]._id !=
              JSON.parse(localStorage.getItem('userData'))._id
            ) {
              return (
                <li
                  onClick={() => openChannel(item)}
                  key={index}
                  className="recent-item"
                >
                  <img src={directAvatar} alt="Avatar" />
                  <span className="title-object">
                    {item.userData[0].userName}
                  </span>
                </li>
              );
            }
            return (
              <li
                onClick={() => openChannel(item)}
                key={index}
                className="recent-item"
              >
                <img src={directAvatar} alt="Avatar" />
                <span className="title-object">
                  {item.userData[1].userName}
                </span>
              </li>
            );
          } else {
            return (
              <li
                onClick={() => openChannel(item)}
                key={index}
                className="recent-item"
              >
                <img src={groupAvatar} alt="Avatar" />{' '}
                <span className="title-object">{item.name}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Recent;
