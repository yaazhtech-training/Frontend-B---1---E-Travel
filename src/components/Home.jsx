import React from 'react';
import imagehome from './Assetes/image5.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="relative bg-blue-500 text-white h-screen flex items-center justify-center py-96">
      <div className="absolute inset-0 justify-center">
        <img 
          src={imagehome}
          alt="Travel" 
          className="w-full h-full object-cover opacity-60 "
        />
      </div>
      <div className="relative z-10 text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-lg mb-8">Find the best travel deals and destinations tailored just for you.</p>
       <Link to='/package'> <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg">Explore Now</button>
       </Link>
      </div>
    </section>
  );
}

export default Home;
