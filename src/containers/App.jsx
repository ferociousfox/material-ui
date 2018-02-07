import React from 'react';
import Header from './../components/Header';

function App() {
  return (
    <div>

      <Header/>

      <div class="hero">
        <img src="logo"/>
        <div>
          <h1>Material-UI</h1>
          <p>React components that implement Google's Material Design</p>
          <button>DEMO</button>
        </div>
      </div>

      <div class="description">
        <p>Material-UI came about from our love of <link>React</link> and <link>Google's Material Design</link>. We are currently using it on a project at <link>Call-Em-All</link> and plan on adding to it and making it better in the coming months.</p>
      </div>

      <div class="gallery">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>

      <div class="promo">
        <p>Want to help make this project awesome? Check out our repo.</p>
      </div>

      <footer>
        <p>Hand crafted with loathing by the engineers at <link>Call-Em-All</link></p>
        <p>and our awesome <link>contributors</link>.</p>
        <img src="githublogo.svg"/>
      </footer>

    </div>
  );
}

export default App;
