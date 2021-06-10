import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { checkToken } from '../../apis/auth.api';

import './home.scss';
import Channels from './NavComponents/Channels/Channels';
import Direct from './NavComponents/Direct/Direct';
import Recent from './NavComponents/Recent/Recent';
import TopInfo from './NavComponents/TopInfo/TopInfo';
const Home = () => {
  const history = useHistory();
  const checkAuth = async () => {
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
      console.log('Call server and check token', result);
    }
  };
  useEffect(() => {
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
      <header className="header">Header</header>
      <aside className="about">About</aside>
      <footer className="content">Content</footer>
      <footer className="footer">This is the footer</footer>
    </div>
  );
};

export default Home;
