import React from 'react';
import GalleryItem from '../components/GalleryItem';
import getStarted from '../assets/images/get-started.svg';
import componentsSvg from '../assets/images/components.svg';
import cssFramework from '../assets/images/css-framework.svg';

function Gallery(){
  return(
    <div className="gallery">
      <GalleryItem
        title="Get Started"
        image={getStarted}/>
      <GalleryItem
        title="Customization"
        image={cssFramework}/>
      <GalleryItem
        title="Components"
        image={componentsSvg}/>
    </div>
  );
}

export default Gallery;
