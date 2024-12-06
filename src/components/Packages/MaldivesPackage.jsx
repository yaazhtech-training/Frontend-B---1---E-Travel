import React from "react";

import video from '../Assetes/Maldives 30 Seconds Aerial Overview Video.mp4'
//day 1
import malday1pl1 from './maldivesAssetes/malday1.jpg'
import malday2 from './maldivesAssetes/malday2.jpg'
import malday3 from './maldivesAssetes/malday3.webp'





const MaldivesPackage = () => {
  const itinerary = [
    {
      day: "Day 1",
      details: 'Arrival in Malé',
      details1: ' Speedboat transfer to the resort,',
      details2: ' Welcome drinks and leisure time to relax at the beach.',
      image: malday1pl1,
      
    },
    {
      day: "Day 2",
      details: 'Snorkeling trip to coral reefs,',
      details1: ' Scuba diving (optional),,',
      details2: '  Evening beach dinner with live music',
      image: malday2,
    },
    {
      day: "Day 3",
      details: 'Visit nearby islands like Maafushi',
      details1: 'Traditional Maldivian lunch,,',
      details2: ' Night stay at a luxury beach villa',
      image:malday3,
      
    },
    {
      day: "Day 4",
      details: 'Private spa treatments,',
      details1: ' Swim in infinity pools,',
      details2: ' Sunset cruise with complimentary drinks..',
      image: "/images/day4.jpg",
    },
    {
      day: "Day 5",
      details: ' Morning dolphin safari',
      details1: ' Jet skiing, parasailing, and windsurfing, ',
      details2: ' Special candlelight dinner at the villa.',
      image: "/images/day5.jpg",
    },
    {
      day: "Day 6",
      details: 'Farewell breakfast',
      details1: ' Transfer to the airport by speedboat',
      details2: 'Thanks for traveling with us!',
      image: "/images/day6.jpg",
    },
  ];

  const pricingDetails = [
    { type: "Couple Package", price: "$4,000 for 5 nights" },
    { type: "Family Package (4 pax)", price: "$6,500 for 5 nights" },
    { type: "Solo Traveler", price: "$2,500 for 5 nights" },
  ];

  const addOns = [
    { title: "Underwater dining experience", price: "$300 per person" },
    { title: "Private yacht cruise", price: "$500 per couple" },
    { title: "Professional photoshoot package", price: "$150" },
  ];

  return (

    <div className="p-6 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Header Section */}
      <div className="relative text-gray-800">
        {/* YouTube Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay Content */}
        <div className="relative p-10 bg-black bg-opacity-50 text-white">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-200">Maldives Travel Package</h1>
            <p className="text-lg mt-4">Discover luxury and adventure in paradise.</p>
          </div>

          {/* Highlights Section */}
          <section className="p-8 flex flex-col items-center text-center">
            <h2 className="text-4xl font-semibold mb-4">Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-xl text-left">
              <li>Duration: 5 Nights / 6 Days</li>
              <li>Destinations: Malé, Maafushi, Meeru Island</li>
              <li>Type: Luxury, Adventure, Honeymoon, Family</li>
            </ul>
          </section>
        </div>
      </div>




      {/* Itinerary Section */}
      <div className="space-y-6 justify-center">
        <h2 className="text-2xl font-bold text-blue-500">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white shadow-md rounded-md p-4 "
          >
            <div className="md:w-2/4 ">
              <h3 className="text-xl font-semibold text-blue-500">{item.day}</h3>
              <li className="mt-2 text-gray-600">{item.details}</li>
              <li className="mt-2 text-gray-600">{item.details1}</li>
              <li className="mt-2 text-gray-600">{item.details2}</li>
            </div>
            <div className="md:w-2/4 ">
           
                <img
                  src={item.image}

                  alt={`${item.day}`}
                  className="rounded-md object-cover"
                />
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Pricing</h2>
        <div className="mt-4 space-y-4">
          {pricingDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-md"
            >
              <p className="text-gray-600">
                <span className="font-semibold">{item.type}:</span> {item.price}
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          * Prices may vary based on travel dates and customization requests.
        </p>
      </div>

      {/* Add-Ons Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Add-Ons</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          {addOns.map((item, index) => (
            <li key={index}>✨ {item.title} ({item.price})</li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🌟 Tailored luxury experiences</li>
          <li>🌟 Trusted local partnerships for authentic Maldivian adventures</li>
          <li>🌟 24/7 support during your trip</li>
        </ul>
      </div>
    </div>
  );
};

export default MaldivesPackage;
