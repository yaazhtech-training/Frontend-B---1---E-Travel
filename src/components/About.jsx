// import React from 'react';
// import image from './Assetes/group.jpg'
// import image1 from './Assetes/explore.jpg'
// import offer from './Assetes/offers.jpg'

// const About = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="container mx-auto px-4">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-5">About Us</h1>
//           <p className="mt-2 text-lg text-gray-600">WHEREEVER YOU WANT TO GO, <br/>WE'LL HELP YOU TO GET THERE</p>
//         </header>
        
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
//           <p className="text-lg text-gray-800">
//             We are dedicated to providing the best travel experiences and adventures. Our mission is to inspire and help travelers explore new destinations with ease and excitement.
//           </p>
//         </section>
        
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
//           <ul className="list-disc list-inside text-lg text-gray-800">
//             <li className="mb-2">Adventure and Exploration</li>
//             <li className="mb-2">Customer Satisfaction</li>
//             <li className="mb-2">Sustainability</li>
//           </ul>
//         </section>
        
//         <section >
//           <h2 className="text-2xl font-semibold text-black mb-4 grid-cols-1"> </h2>
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full md:w-1/3 px-4 mb-8">
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <img src={image} alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4"/>
//                 <h3 className="text-xl font-semibold text-gray-800">Praveen</h3>
//                 <p className="text-black mt-2 font-bold">Founder </p>
//                 <p className="mt-2 text-black">Praveen is passionate about travel and adventure. With over a decade of experience in the travel industry, he leads our team with dedication and enthusiasm.</p>
//               </div>
//             </div>
          
           
//           </div>
//         </section>
//         <section>
//             <div className="flex flex-wrap -mx-4 justify-center   -mt-80 ">
//             <div className="w-full md:w-1/3 px-4 mb-8">
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <img src={image1} alt="Trip Explore" className="w-24 h-24 rounded-full mx-auto mb-4"/>
//                 <h3 className="text-xl font-semibold text-gray-800">Exploring Your Trip</h3>
//                 <p className="text-black mt-2 font-bold"> Explore The Wold With Us</p>
//                 <p className="mt-2 text-black">"Explore breathtaking destinations with us. From hidden gems to popular spots, our travel experiences promise adventure, relaxation, and unforgettable memories for every traveler."</p>
//               </div>
//             </div>
//             </div>
//             </section>

//             <section>
//               <div className=' flex flex-wrap -mx-4 justify-center   '>
//                 <div className=' w-full md:w-1/3 px-4 mb-8 ml-auto -mt-80'>
//                     <div className='bg- p-6 rounded-lg  shadow-lg'>
//                         <img src={offer} alt=" Offers Closes Soon"  className='w-24 h-24 rounded-full mx-auto mb-4'/>
//                         <h3 className='text-xl font-semibold text-black'> offers</h3>
//                         <p className='text-black mt-2 font-bold ' >Offers Closes Soon </p>
//                         <p className=' mt-2 text-black'>"Discover exclusive travel offers: discounted packages, limited-time deals, and personalized itineraries. Enjoy exceptional value and unique experiences tailored to your dream destinations."</p>
//                          </div>

//                 </div>
//                 </div>  
//             </section>


       
         
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react'
import worker from './Assetes/P 2.png'
// import yaazh from './Assetes/yaazh.jpg'
// import food from './Assetes/food.jpg';
// import book from './Assetes/book.avif';


const About = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-4 md:px-16 lg:px-20">
        <div>
          <h2 className="font-semibold text-4xl mt-8 mb-4">
            Yaazh Book Helps You Do the Best Work of Your Life
          </h2>
          <p className="text-xl font-sans">
            Explain the purpose of your site and what sets it apart.
            <br />
            Brief bios of the people behind the site, if applicable.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg max-w-xs lg:max-w-sm"
            src={worker}
            alt="Team Member"
          />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="font-semibold text-4xl mb-4">
          The Ultimate Guide To Yaazhbook Library
        </h2>
        <p className="text-lg">
          Yaazh’Books software helps teams increase productivity by 50% and cut down on email by 90%.
        </p>
      </div>

      {/* Team Section */}
      <section className="mt-12 px-4 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
             // src={yaazh}
              alt="Team member 1"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">yaazhTech</h3>
            <h4 className="font-medium text-gray-600">2012-2024</h4>
            <p className="text-gray-700 mt-4">
              Our company originated with young minds taking baby steps into the software development
              world, providing world-class software services for industries.
            </p>
            <a href="https://yaazhtech.com/">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              //src={book}
              alt="Team member 2"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">Yaazhbook</h3>
            <h4 className="font-medium text-gray-600">2024</h4>
            <p className="text-gray-700 mt-4">
              Launched in 2024, eBooks.com is a popular ebook retailer with a reputation for
              innovation, integrity, and independence.
            </p>
            <a href="">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
             // src={food}
              alt="Team member 3"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">Aymuni Foods</h3>
            <h4 className="font-medium text-gray-600">2021-2024</h4>
            <p className="text-gray-700 mt-4">
              Food Delivery App Development: Everything You Need to Know About Building a Food Delivery Platform.
            </p>
            <a href="https://foodfly.yaazhtech.com/">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;