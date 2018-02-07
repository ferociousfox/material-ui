import React from 'react';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Description from './../components/Description';
import Gallery from './Gallery';
import Promo from './../components/Promo';
import Footer from './../components/Footer';

function App() {
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');

        body{
          margin: 0;
          padding: 0;
          box-styling: border-box;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
        }
      `}</style>
      <Header/>
      <Hero/>
      <Description/>
      <Gallery/>
      <Promo/>
      <Footer/>

      <footer>
        <p>Hand crafted with loathing by the engineers at <a>Call-Em-All</a></p>
        <p>and our awesome <a>contributors</a>.</p>
        <img src="githublogo.svg"/>
      </footer>

    </div>
  );
}

export default App;
