import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem(props){
  return(
    <div className="card">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <img src={props.image}/>
      <style jsx>{`
          img {
            width: 100%;
            height: auto;
          }
          .header {
            width: 100%;
            background-color: #eeeeee;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card {
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;          
          }
      `}</style>
    </div>
  );
}

export default GalleryItem;

GalleryItem.propTypes={
  title: PropTypes.string,
  image: PropTypes.string
};
