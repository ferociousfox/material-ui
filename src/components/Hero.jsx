import React from 'react';
import logo from '../assets/images/logo.svg';

function Hero() {
  return(
    <div className="hero">
      <img src={logo}/>
      <h1>Material-UI</h1>
      <p>React components that implement<br/>Google's Material Design</p>
      <button>DEMO</button>
      <style jsx>{`
        .hero {
          height: 508px;
          background-color: #00bcd4;
          color: rgba(255,255,255,0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        button{
          border: none;
          border-radius: 2px;
          padding: 10px 20px;
          font-size: 0.8em;
          color: #00bcd4;
          box-shadow: 0 0 5px 2px rgba(0,0,0, 0.1);
        }
        h1 {
          font-weight: 300;
          font-size: 3.6em;
          margin: 0;
        }
        p {
          font-size: 1.5em;
          font-weight: 100;
          margin: 0;
          text-align: center;
          margin-bottom: 30px;
        }
        img {
          position: relative;
          transform: translate(25%, 0);
          width:420px;
        }
      `}</style>
    </div>
  );
}

export default Hero;
