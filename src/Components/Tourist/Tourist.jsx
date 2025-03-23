import React, { useState } from 'react';

function Tourist({ places }) {
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const filterPlaces = (category) => {
    if (category === 'All') {
      setFilteredPlaces(places);
    } else {
      const filtered = places.filter((place) => place.category === category);
      setFilteredPlaces(filtered);
    }
  };

  return (
    <>
      <div className="my-[4vw] flex flex-col items-center justify-center">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => filterPlaces('All')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            All
          </button>
          <button
            onClick={() => filterPlaces('Adventure')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Adventure
          </button>
          <button
            onClick={() => filterPlaces('Garden')}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Garden
          </button>
          <button
            onClick={() => filterPlaces('Water')}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Water
          </button>
          <button
            onClick={() => filterPlaces('Spiritual')}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Spiritual
          </button>
        </div>
      </div>

      {/* Filtered Places */}
      <div className="flex flex-col items-center justify-center w-full">
        {filteredPlaces.map((place) => (
          <a
            key={place.id}
            href={place.redirectLink}  // Add the link where you want to redirect
            className="flex items-center justify-start w-[80%] md:w-[60%] my-4 p-4 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-32 h-32 object-cover rounded-lg mr-6"  // Fixed size for all images
            />
            <div className="flex flex-col items-start justify-center">  {/* Ensures text is centered vertically */}
              <h3 className="text-2xl text-gray-500 font-serif mb-2">{place.name}</h3>
              <p className="text-gray-600 text-md font-[Poppins]  leading-relaxed">{place.description}</p>
            </div>
          </a>
        ))}
      </div>
      
    </>
  );
}

export default Tourist;
