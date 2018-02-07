import React from 'react';
import Header from './../components/Header';

function App() {
  return (
    <div>
      <style jsx global>{`
        body{
          margin: 0;
          padding: 0;
          box-styling: border-box;
        }
      `}</style>
      <Header/>

      <div className="hero">
        <img src="logo"/>
        <div>
          <h1>Material-UI</h1>
          <p>React components that implement Google's Material Design</p>
          <button>DEMO</button>
        </div>
      </div>

      <div className="description">
        <p>Material-UI came about from our love of <a>React</a> and <a>Google's Material Design</a>. We are currently using it on a project at <a>Call-Em-All</a> and plan on adding to it and making it better in the coming months.</p>
      </div>

      <div className="gallery">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>

      <div className="promo">
        <p>Want to help make this project awesome? Check out our repo.</p>
      </div>

      <footer>
        <p>Hand crafted with loathing by the engineers at <a>Call-Em-All</a></p>
        <p>and our awesome <a>contributors</a>.</p>
        <img src="githublogo.svg"/>
      </footer>

    </div>
  );
}

export default App;
