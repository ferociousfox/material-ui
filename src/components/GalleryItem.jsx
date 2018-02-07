import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem(props){
  return(
    <div className="card">
      <style jsx>{`
        img {
          width: 300px;
          height: auto;
        }
      `}</style>
      {props.title}
      <img src={props.image}/>
    </div>
  );
}

export default GalleryItem;

GalleryItem.propTypes={
  title: PropTypes.string,
  image: PropTypes.string
};
