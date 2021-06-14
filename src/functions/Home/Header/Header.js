import { faCommentMedical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Header = () => {
  const channel = useSelector((state) => state.popupChat);
  const userList = useSelector((state) => state.userList);
  const [group, setGroup] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'main' && userList) {
      let currentUser = userList.filter((item) => item._id === id)[0];
      setGroup({ ...currentUser, type: 'direct' });
    }
  }, [id, JSON.stringify(userList)]);

  return (
    <>
      {id !== 'main' ? (
        <div className="header-container">
          <div className="header-info">
            {group && group.type == 'direct' ? (
              <>
                <span>@ {group.userName}</span>
                <span>{group.email}</span>{' '}
              </>
            ) : (
              <>
                <span># Java Script</span>
                <span>2 users</span>{' '}
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
