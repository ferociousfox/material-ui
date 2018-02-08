import React from 'react';

function Description(){
  return(
    <div className="description">
      <p>Material-UI came about from our love of <a>React</a> and <a>Google's Material Design</a>. We are currently using it on a project at <a>Call-Em-All</a> and plan on adding to it and making it better in the coming months.</p>
      <style jsx>{`
          .description {
            height: 300px;
            background-color: #eeeeee;
            display: flex;
            align-items: center;
            padding: 30px;
            font-size: 1.2em;
            text-align: center;
          }
          a {
            color: #fb6f9f;
          }
      `}</style>
    </div>
  );
}

export default Description;
