import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('googleUserData')) {
      history.push('/login');
    }
  }, []);
  return <div>Home Page</div>;
};

export default Home;
