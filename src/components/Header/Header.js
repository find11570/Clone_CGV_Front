import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/cgv_logo.png';
import login from '../../assets/loginPassword.png'
import join from '../../assets/loginJoin.png'
import mycgv from '../../assets/loginMember.png'
import center from '../../assets/loginCustomer.png'
import hambergericon from '../../assets/Hamburger_icon.png';

import './Header.css';

const Header = () => {
  const logoutBtn = () => {
    sessionStorage.clear();
    alert("로그아웃 성공!");
  };
  const user_id = sessionStorage.getItem('user_id');
  if(user_id) {
    return (
      <header className="header-box">
        <Link to="/">
          <img
            id="logo"
            style={{ width: "80%", height: "80%", margin: "2%", marginLeft: "-5%" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <img id="hidden-btn" src={hambergericon} alt="hidden-btn" />
        <section className="btn-group-box">
          <div className="btn-box" onClick={ () => logoutBtn()}>
            <Link to="/login">
              <img className="btn-img" src={login} alt="login" />
            </Link>
            <span className="btn-text">로그아웃</span>
          </div>
          <div className="btn-box">
            <Link to="/mycgv">
              <img className="btn-img" src={mycgv} alt="my-cgv" />
            </Link>
            <span className="btn-text">MY CGV</span>
          </div>
          <div className="btn-box">
            <Link to="/#">
              <img className="btn-img" src={center} alt="qna" />
            </Link>
            <span className="btn-text">고객센터</span>
          </div>
        </section>
      </header>
    );

  }
  else {
    return (
      <header className="header-box">
        <Link to="/">
          <img
            id="logo"
            style={{ width: "80%", height: "80%", margin: "2%", marginLeft: "-5%" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <img id="hidden-btn" src={hambergericon} alt="hidden-btn" />
        <section className="btn-group-box">
          <div className="btn-box">
            <Link to="/login">
              <img className="btn-img" src={login} alt="login" />
            </Link>
            <span className="btn-text">로그인</span>
          </div>
          <div className="btn-box">
            <Link to="/join">
              <img className="btn-img" src={join} alt="sign-up" />
            </Link>
            <span className="btn-text">회원가입</span>
          </div>
          <div className="btn-box">
            <Link to="/login">
              <img className="btn-img" src={mycgv} alt="my-cgv" />
            </Link>
            <span className="btn-text">MY CGV</span>
          </div>
          <div className="btn-box">
            <Link to="/#">
              <img className="btn-img" src={center} alt="qna" />
            </Link>
            <span className="btn-text">고객센터</span>
          </div>
        </section>
      </header>
    );
  }
    
};

export default Header;