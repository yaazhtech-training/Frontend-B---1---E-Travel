import React from "react";

const MaldivesPackage = () => {
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
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Maldives Travel Package</h1>
        <p className="text-lg mt-4 text-gray-600">Discover luxury and adventure in paradise.</p>
      </div>
</div>
  );
};

export default MaldivesPackage;
