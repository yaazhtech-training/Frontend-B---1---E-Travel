import React from 'react';
import travelVideo from './video/travel video.mp4';

const Home = () => {
  return (
    <div className="relative min-h-screen">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-600 font-serif">
        Ready To Explore Your Dream Destination
        </h1>
        <p className="mb-6 text-lg md:text-2xl lg:text-3xl font-serif text-gray-200">
          
          Pack Your Bags and Start Your Journey Today!
Because the world is too beautiful to stay in one place. 🌟

        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
