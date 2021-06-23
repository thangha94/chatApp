import {
  faFilter,
  faSlidersH,
  faStar,
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllRoomByUser } from '../../../../apis/other.api';
import CreateChannel from './CreateChannel';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomList } from '../../../../redux/actions/rooms.action';
import groupAvatar from '../../../../images/group-avatar.svg';

const Channels = ({ socket, toggleMenu }) => {
  const [createVisible, setCreateVisible] = useState(false);
  // const [channels, setChannels] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.roomList);

  const initialData = async () => {
    const rooms = await getAllRoomByUser({
      userId: JSON.parse(localStorage.getItem('userData'))._id,
    });
    if (!rooms.errorStatus) {
      dispatch(setRoomList(rooms.data));
    }
  };

  const changeChannel = (channel) => {
    history.push({
      pathname: `/home/type/channel/t/${channel._id}`,
    });
    toggleMenu();
  };

  useEffect(() => {
    if (socket) {
      socket.on('Server-created-new-room', (data) => {
        initialData();
      });
    }
  }, [socket]);

  useEffect(() => {
    initialData();
  }, []);

  return (
    <>
      <div className="channels-container nav-sub-container">
        <span className="title">
          <FontAwesomeIcon icon={faSlidersH} /> Channels
          <span className="adjust-title-icon add-channel">
            <FontAwesomeIcon
              onClick={() => setCreateVisible(true)}
              icon={faPlus}
            />
          </span>
        </span>
        <ul>
          {channels.map(
            (item, index) =>
              item.name && (
                <li
                  onClick={() => changeChannel(item)}
                  className="channel-item"
                  key={index}
                >
                  <img src={groupAvatar} alt="Avatar" />
                  <span className="title-object">{item.name}</span>
                </li>
              )
          )}
        </ul>
      </div>
      <CreateChannel
        setCreateVisible={setCreateVisible}
        visible={createVisible}
      />
    </>
  );
};

export default Channels;
