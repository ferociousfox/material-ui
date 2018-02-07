import React from 'react';
import hamburger from '../assets/images/hamboiga.svg';

function Header(){
  return (
    <div className="nav">
      <img src={hamburger}/>
      <style jsx>{`
        .nav {
          background-color: #00bcd4;
          height: 64px;
        }
        img {
          width: 50px;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default Header;
