import React from 'react';
import github from '../assets/images/github.png';

function Footer() {
  return(
    <div className="footer">
      <footer>
        <p>Hand crafted with loathing by the engineers at <a>Call-Em-All</a></p>
        <p>and our awesome <a>contributors</a>.</p>
        <img src={github}/>
      </footer>
      <style jsx>{`
        img {
          width: 25px;
          height: auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Footer;
