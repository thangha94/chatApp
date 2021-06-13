import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { checkToken } from '../../apis/auth.api';
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
const Home = () => {
  const history = useHistory();
  const socket = localStorage.getItem('tokenId')
    ? socketIOClient(SERVER_URL, {
        query: 'tokenId=' + localStorage.getItem('tokenId'),
      })
    : null;
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
    if (socket) {
      socket.on('Server-send-data', (data) => {
        console.log(data);
      });
    }
  };
  useEffect(() => {
    handleSocketMessage();
    checkAuth();
  }, []);
  return (
    <div className="home-container">
      <nav className="nav-menu">
        <TopInfo />
        <Recent />
        <Channels />
        <Direct />
      </nav>
      <header className="header">
        <Header />
      </header>
      <aside className="about">
        <About />
      </aside>
      <footer className="content">
        <Content />{' '}
      </footer>
      <footer className="footer">
        <Footer socket={socket} />
      </footer>
    </div>
  );
};

export default Home;
