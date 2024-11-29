import React from 'react';
import travelVideo from './video/travel video.mp4'
const Home = () => {
  return (
    <div className="relative h-[70vh]">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src={travelVideo}
        autoPlay 
        loop 
       muted 
        playsInline
      />
      
      {/* Overlay and Content */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-yellow-600 font-serif">ALL YOUR FASHION</h1>
        <p className="mb-6 text-5xl font-serif text-gray-200">Need At One Place</p>
        <div className="mb-5">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4">
            Read More
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
