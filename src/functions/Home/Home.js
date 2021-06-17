import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { checkToken } from '../../apis/auth.api';
import { getMessagesByRoom, getRoomByUsers } from '../../apis/other.api';
import { useDispatch, useStore } from 'react-redux';
import { SERVER_URL } from '../../define';
import About from './About/About';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import './home.scss';
import Channels from './NavComponents/Channels/Channels';
import Direct from './NavComponents/Direct/Direct';
import Recent from './NavComponents/Recent/Recent';
import TopInfo from './NavComponents/TopInfo/TopInfo';
import {
  addMessageToList,
  setMessageList,
} from '../../redux/actions/messages.action';
import { setUserList } from '../../redux/actions/users.action';
const Home = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  const { id, type } = useParams();
  const [socket, setSocket] = useState(false);
  const checkAuth = async () => {
    try {
      let tokenId = localStorage.getItem('tokenId');
      if (!tokenId) {
        history.replace({
          pathname: '/login',
        });
      } else {
        let result = await checkToken({ tokenId });
        if (result.errorStatus) {
          history.replace({
            pathname: '/login',
          });
        }
      }
    } catch (error) {
      history.replace({
        pathname: '/login',
      });
    }
  };
  const handleSocketMessage = () => {
    const initSocket = localStorage.getItem('tokenId')
      ? socketIOClient(SERVER_URL, {
          query: 'tokenId=' + localStorage.getItem('tokenId'),
        })
      : null;
    setSocket(initSocket);
    if (initSocket) {
      // Receive new message from server
      initSocket.on('Server-send-data', (data) => {
        dispatch(addMessageToList(data.data));
      });
      // Handle for the first time connect and chat between 2 users
      initSocket.on('Server-join-room', (data) => {
        initSocket.emit('Client-first-join-room', data);
      });
      initSocket.on('Server-send-new-room-data', (data) => {
        getMess({ room: data.data.roomId });
      });
      // Update users status (online or not)
      initSocket.on('Server-update-users', (data) => {
        dispatch(setUserList(data));
      });
    }
    return initSocket;
  };

  const initializeData = async () => {
    // get room from users
    // sync data
    if (type == 'direct') {
      let roomData = await getRoomByUsers({
        user1: id,
        user2: JSON.parse(localStorage.getItem('userData'))._id,
      });
      if (!roomData.errorStatus) {
        if (id !== 'main') {
          getMess({ room: roomData.data._id });
        }
      } else {
        dispatch(setMessageList([]));
      }
    } else {
      if (id !== 'main') {
        getMess({ room: id });
      }
    }
  };

  const getMess = async (room) => {
    let message = await getMessagesByRoom(room);
    if (!message.errorStatus) {
      dispatch(setMessageList(message.data));
    }
  };
  useEffect(() => {
    initializeData();
  }, [id]);

  useEffect(() => {
    let initSocket = handleSocketMessage();
    checkAuth();

    return () => {
      if (initSocket) {
        initSocket.emit('disconnect-socket', 'Update URL');
      }
    };
  }, []);

  return (
    <div className="home-container">
      <nav className="nav-menu">
        <TopInfo />
        <div className="nav-detail-content">
          <Recent />
          <Channels socket={socket} />
          <Direct />
        </div>
      </nav>
      <header className="header">
        <Header />
      </header>
      {/* <aside className="about">
        <About />
      </aside> */}
      <section className="content">
        <Content />
      </section>
      <footer className="footer">
        <Footer socket={socket} />
      </footer>
    </div>
  );
};

export default Home;
