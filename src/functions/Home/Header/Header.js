import { faCommentMedical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatarImg from '../../../images/undraw_female_avatar_w3jk.svg';
import groupAvatarImg from '../../../images/group-avatar.svg';

const Header = ({ toggleMenu }) => {
  const userList = useSelector((state) => state.userList);
  const roomList = useSelector((state) => state.roomList);
  const [group, setGroup] = useState(false);
  const { id, type } = useParams();
  const searchRef = useRef(false);
  const searchInputRef = useRef(false);

  useEffect(() => {
    if (type == 'direct') {
      if (id !== 'main' && userList && userList.length > 0) {
        let currentUser = userList.filter((item) => item._id === id)[0];
        setGroup(currentUser);
      }
    } else {
      if (id !== 'main' && roomList && roomList.length > 0) {
        let currentRoom = roomList.filter((item) => item._id === id)[0];
        setGroup(currentRoom);
      }
    }
  }, [id, JSON.stringify(userList)]);

  useEffect(() => {
    const callbackOutClick = (e) => {
      let searchElm = document.querySelector('.search-container');
      if (searchElm && !searchElm.contains(e.target)) {
        searchRef.current.classList.remove('active');
      }
    };
    document.addEventListener('click', callbackOutClick);

    return () => document.removeEventListener('click', callbackOutClick);
  }, []);

  return (
    <div className="header-container">
      <span onClick={toggleMenu} className="hum-menu"></span>
      {id !== 'main' ? (
        <>
          <div className="header-info">
            {group && type == 'direct' ? (
              <div className="direct-info info-container">
                <img
                  src={avatarImg}
                  alt="Member avatar"
                  className="target-user-avatar"
                />
                <div className="info__text">
                  <span>@ {group.userName}</span>
                  <span>{group.email}</span>{' '}
                </div>
              </div>
            ) : (
              <div className="channel-info info-container">
                <img
                  className="target-user-avatar"
                  src={groupAvatarImg}
                  alt="Group avatar"
                />
                <div className="info__text">
                  <span># {group.name}</span>
                  <span>{group.users && group.users.length} users</span>
                </div>
              </div>
            )}
          </div>
          <div className="header-search" ref={searchRef}>
            <div className="search-container">
              <input
                ref={searchInputRef}
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <span
                onClick={() => {
                  searchRef.current.classList.add('active');
                  searchInputRef.current.focus();
                }}
                className="search-icon"
              >
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </>
      ) : (
        <>Start chatting with your mate!</>
      )}
    </div>
  );
};

export default Header;
