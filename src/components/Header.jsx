import React from 'react';
import hamburger from '../assets/images/hamboiga.svg';
import githubWhite from '../assets/images/github-white.png';

function Header(){
  return (
    <div className="nav">
      <img src={hamburger}/>
      <img src={githubWhite}/>
      <style jsx>{`
        .nav {
          background-color: #00bcd4;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        img {
          width: 25px;
          height: auto;
        }
      `}</style>

    </div>
  );
}

export default Header;
