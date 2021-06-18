import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faEnvelope,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import './login.scss';
import register from '../../images/undraw_maker_launch_crhe.svg';
import register2 from '../../images/undraw_press_play_bx2d.svg';
import useLocalStorage from '../../customHook/useLocalStorage';
import { signupServer, signinServer } from '../../apis/auth.api';
import { GOOGLE_CLIENT_ID } from '../../define';
import Loading from '../Loading/Loading';

const Login = () => {
  const [mode, setMode] = useState('');
  const [loading, setLoading] = useState(false);
  const userNameRef = useRef(false);
  const passwordRef = useRef(false);
  const userNameSignUpRef = useRef(false);
  const passwordSignUpRef = useRef(false);
  const emailSignUpRef = useRef(false);
  const loginFormRef = useRef(false);
  const signupFormRef = useRef(false);
  const signupErrorRef = useRef(false);
  const signinErrorRef = useRef(false);
  const [token, setToken] = useLocalStorage('cc-token', false);

  const history = useHistory();
  const successGoogleLogin = async (res) => {
    loginProcess({ googleToken: res.tokenId });
  };
  const failGoogleLogin = (res) => {
    // console.log('Fail', res);
  };

  const loginProcess = async (data) => {
    let result = await signinServer(data);
    if (result.errorStatus) {
      let errorDetails = result.data.details,
        messages = [];
      errorDetails.forEach((item) => {
        messages.push(item.message);
      });
      signinErrorRef.current.classList.add('error');
      signinErrorRef.current.classList.remove('success');
      signinErrorRef.current.innerHTML = messages.join(', ');
    } else {
      localStorage.setItem('tokenId', result.data.tokenId);
      localStorage.setItem('userData', JSON.stringify(result.data.user));
      signinErrorRef.current.classList.remove('error');
      signinErrorRef.current.classList.add('success');
      setLoading(true);
      setTimeout(() => {
        history.push({
          pathname: '/',
        });
      }, 500);
    }
  };

  const submitFormLogin = (e) => {
    e.preventDefault();
    let email = userNameRef.current.value.trim(),
      password = passwordRef.current.value.trim();
    loginProcess({ email, password });
  };

  const signup = async (e) => {
    e.preventDefault();
    let email = emailSignUpRef.current.value.trim(),
      userName = userNameSignUpRef.current.value.trim(),
      password = passwordSignUpRef.current.value.trim();
    let result = await signupServer({ email, userName, password });
    if (result.errorStatus) {
      let errorDetails = result.data.details,
        messages = [];
      errorDetails.forEach((item) => {
        messages.push(item.message);
      });

      signupErrorRef.current.classList.add('error');
      signupErrorRef.current.classList.remove('success');
      signupErrorRef.current.innerHTML = messages.join(', ');
    } else {
      signupErrorRef.current.innerHTML = result.data;
      signupErrorRef.current.classList.remove('error');
      signupErrorRef.current.classList.add('success');
    }
  };

  const cleanInput = (input) => {
    switch (input) {
      case 'signin-userName':
        userNameRef.current.value = '';
        userNameRef.current.focus();
        break;
      case 'signin-password':
        passwordRef.current.value = '';
        passwordRef.current.focus();
        break;
      case 'signup-password':
        passwordSignUpRef.current.value = '';
        passwordSignUpRef.current.focus();
        break;
      case 'signup-email':
        emailSignUpRef.current.value = '';
        emailSignUpRef.current.focus();
        break;
      case 'signup-userName':
        console.log(userNameSignUpRef.current.value, userNameSignUpRef);
        userNameSignUpRef.current.value = '';
        userNameSignUpRef.current.focus();
        break;
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className={`container ${mode}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="http://localhost:8080/signup"
              method="POST"
              className="sign-in-form"
              encType="multipart/form-data"
              onSubmit={submitFormLogin}
              ref={loginFormRef}
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <span className="input-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  name="useName"
                  ref={userNameRef}
                />
                <span
                  className="clear-icon"
                  onClick={() => cleanInput('signin-userName')}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </div>
              <div className="input-field">
                <span className="input-icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={passwordRef}
                />
                <span
                  className="clear-icon"
                  onClick={() => cleanInput('signin-password')}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </div>
              <span className="sign-in-info" ref={signinErrorRef}></span>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <GoogleLogin
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText={'Login with Google'}
                  onSuccess={successGoogleLogin}
                  onFailure={failGoogleLogin}
                  // cookiePolicy={'single_host_origin'}
                  className="google-icon"
                />
              </div>
            </form>
            <form
              ref={signupFormRef}
              onSubmit={signup}
              action=""
              className="sign-up-form"
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <span className="input-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  ref={userNameSignUpRef}
                  type="text"
                  placeholder="Username"
                  name="useName"
                />
                <span
                  className="clear-icon"
                  onClick={() => cleanInput('signup-userName')}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </div>
              <div className="input-field">
                <span className="input-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  ref={emailSignUpRef}
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <span
                  className="clear-icon"
                  onClick={() => cleanInput('signup-email')}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </div>
              <div className="input-field">
                <span className="input-icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  ref={passwordSignUpRef}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <span
                  className="clear-icon"
                  onClick={() => cleanInput('signup-password')}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </div>
              <span className="sign-up-info" ref={signupErrorRef}></span>
              <input type="submit" value="Sign up" className="btn solid" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Chit Chat ?</h3>
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
    </>
  );
};

export default Login;
