import React from 'react';
import travelVideo from './video/travel video.mp4';
import { Link } from 'react-router-dom';

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-600 font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Ready To Explore Your Dream Destination
        </h1>
        <p className="mb-6 text-lg md:text-2xl lg:text-3xl font-serif   bg-gradient-to-r from-pink-400 via-blue-500  to-purple-500 bg-clip-text text-transparent">
          
          Pack Your Bags and Start Your Journey Today!
Because the world is too beautiful to stay in one place. 🌟

        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to='/about'><button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Read More
          </button></Link>
         <Link to='/contact'>
         <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Us 
          </button></Link>
        </div>
      </div>
      <section id="destinations" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Paris', 'Maldives', 'Tokyo'].map((destination) => (
              <div key={destination} className="bg-white shadow-lg rounded overflow-hidden">
                <img
                  src={`https://example.com/${destination.toLowerCase()}-image.jpg`}
                  alt={destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{destination}</h3>
                  <p className="text-gray-600">Discover the charm of {destination} with our tailored packages.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
 


