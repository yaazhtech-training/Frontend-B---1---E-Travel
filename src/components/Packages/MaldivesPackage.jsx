import React from "react";

import video from '../Assetes/Maldives 30 Seconds Aerial Overview Video.mp4'

const MaldivesPackage = () => {
  const itinerary = [
    {
      day: "Day 1",
      details: "Arrival in Malé, Speedboat transfer to the resort, Welcome drinks and leisure time to relax at the beach.",
      image: "/Assetes/maldives.jpg", // Replace with your image path
    },
    {
      day: "Day 2",
      details: "Snorkeling trip to coral reefs, Scuba diving (optional), Evening beach dinner with live music.",
      image: "/images/day2.jpg",
    },
    {
      day: "Day 3",
      details: "Visit nearby islands like Maafushi, Traditional Maldivian lunch, Night stay at a luxury beach villa.",
      image: "/images/day3.jpg",
    },
    {
      day: "Day 4",
      details: "Private spa treatments, Swim in infinity pools, Sunset cruise with complimentary drinks.",
      image: "/images/day4.jpg",
    },
    {
      day: "Day 5",
      details: "Morning dolphin safari, Jet skiing, parasailing, and windsurfing, Special candlelight dinner at the villa.",
      image: "/images/day5.jpg",
    },
    {
      day: "Day 6",
      details: "Farewell breakfast, Transfer to the airport by speedboat.",
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
      <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>Duration: 5 Nights / 6 Days</li>
        <li>Destinations: Malé, Maafushi, Meeru Island</li>
        <li>Type: Luxury, Adventure, Honeymoon, Family</li>
      </ul>
    </section>
  </div>
</div>


  

      {/* Itinerary Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-500">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-md p-4"
          >
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-blue-500">{item.day}</h3>
              <p className="mt-2 text-gray-600">{item.details}</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={item.image}
                alt={`${item.day}`}
                className="rounded-md w-full object-cover"
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
