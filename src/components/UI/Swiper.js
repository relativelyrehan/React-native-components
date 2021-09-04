import React from 'react';
import GallerySwiper from 'react-native-gallery-swiper';

function Swiper({images}) {
  console.log('i am colo', images);
  return <GallerySwiper images={images} sensitiveScroll={false} />;
}

export default Swiper;
