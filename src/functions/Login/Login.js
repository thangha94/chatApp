import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCheckSquare,
  lock,
  faUser,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import GoogleLogin from 'react-google-login';
const CLIENT_ID =
  '550467040202-papd023rtkrv64nkq62s6t4l9gshsr1t.apps.googleusercontent.com';

import './login.scss';
import register from '../../images/undraw_maker_launch_crhe.svg';
import register2 from '../../images/undraw_press_play_bx2d.svg';

const Login = () => {
  const [mode, setMode] = useState('');

  const successLogin = (res) => {
    localStorage.setItem('googleToken', res.tokenId);
    localStorage.setItem('googleUserData', JSON.stringify(res));
  };
  const failLogin = (res) => {
    console.log('Fail', res);
  };

  const checkLogin = async () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this);
        let parser = new DOMParser();
        console.log(parser.parseFromString(this.responseXML, 'text/xml'));
      }
    };
    xhttp.open(
      'GET',
      'http://localhost:8080?tokenId=' + localStorage.getItem('googleToken'),
      true
    );
    xhttp.send();
  };
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className={`container ${mode}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <span className="input-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" placeholder="Username" name="" id="" />
            </div>
            <div className="input-field">
              <span className="input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" placeholder="Password" name="" id="" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText={false}
                onSuccess={successLogin}
                onFailure={failLogin}
                cookiePolicy={'single_host_origin'}
                className="google-icon"
              />
            </div>
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <span className="input-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" placeholder="Username" name="" id="" />
            </div>
            <div className="input-field">
              <span className="input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input type="text" placeholder="Email" name="" id="" />
            </div>
            <div className="input-field">
              <span className="input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" placeholder="Password" name="" id="" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus dolor fugiat!
            </p>
            <button
              onClick={() => setMode('sign-up-mode')}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={register2} alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus dolor fugiat!
            </p>
            <button
              onClick={() => setMode('sign-in-mode')}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign in
            </button>
          </div>
          <img src={register} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
