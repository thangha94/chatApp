import { faCommentMedical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Header = () => {
  const userList = useSelector((state) => state.userList);
  const roomList = useSelector((state) => state.roomList);
  const [group, setGroup] = useState(false);
  const { id, type } = useParams();

  useEffect(() => {
    if (type == 'direct') {
      if (id !== 'main' && userList && userList.length > 0) {
        let currentUser = userList.filter((item) => item._id === id)[0];
        setGroup(currentUser);
      }
    } else {
      if (id !== 'main' && roomList && roomList.length > 0) {
        let currentRoom = roomList.filter((item) => item._id === id)[0];
        console.log(currentRoom);
        setGroup(currentRoom);
      }
    }
  }, [id, JSON.stringify(userList)]);

  return (
    <>
      {id !== 'main' ? (
        <div className="header-container">
          <div className="header-info">
            {group && type == 'direct' ? (
              <>
                <span>@ {group.userName}</span>
                <span>{group.email}</span>{' '}
              </>
            ) : (
              <>
                <span># {group.name}</span>
                <span>{group.users && group.users.length} users</span>
              </>
            )}
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search message" />
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      ) : (
        <div className="header-container">
          Choose an item in left menu to start chatting!
        </div>
      )}
    </>
  );
};

export default Header;
