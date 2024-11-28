import React from 'react';
import image1 from './Assetes/image1.jpg';
import mumbai from './Assetes/mumbai1.jpg';
import ladakh from './Assetes/ladakh.jpg';
import goa from './Assetes/goa.avif'

const packages = [
  { 
    id: 1, 
    destination: "kerala", 
    para: "Welcoming you to 'God's own country'", 
    price: "100,657", 
    duration: "5 Days",
    image:image1,
    

  },
  { 
    id: 2, 
    destination: "Mumbai",
    para:"Welcomin you to 'The city of dreams'", 
    price: "125,822", 
    duration: "7 Days",
    image:mumbai
  },
  { 
    id: 3, 
    destination: "Ladakh", 
    para:"welcoming you to 'The Land Of High Passes'",
    price: "150,986", 
    duration: "4 Days",
    image: ladakh
  },
  { 
    id: 4, 
    destination: "Goa", 
    para: "Welcoming you to 'The beach world'",
    price: "112,999", 
    duration: "5 Days",
    image: goa
  },
  {
    id: 5,
    destination:"Meghalaya",
    para:"welcoming you to 'Abode Of clouds And Scotland of East'",
    price:"123,456",
    duration:"6 days",
    image:"",
 },
];

const Packages = () => {
  return (
    <section id="packages" className="py-10 bg-gray-100 mt-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={pkg.image} 
                alt={pkg.image} 
                className="w-96 h-20 rounded-full shadow-lg justify-center px-10" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pkg.destination}</h3>
                <p className='mt-2'>{pkg.para}</p>
                <p className="mt-2">Duration: {pkg.duration}</p>
                <p className="mt-2">Price: {pkg.price}</p>
                <button  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"><script>'./Packagepage.jsx'</script> Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
