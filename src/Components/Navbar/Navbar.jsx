import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== "") {
      // Redirect to Google search with the search term in the same tab
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
      window.location.href = googleSearchUrl; // Open in the same tab
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <div className="nav my-[2vw] flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 p-4 rounded-lg shadow-lg">
      {/* Logo Section */}
      <div className="nav-logo text-3xl font-extrabold text-white">
        Kashmir Tourism
      </div>

      {/* Menu Section */}
      <ul className="nav-menu flex space-x-8 text-lg text-white font-medium">
        <li>
          <Link
            to="/HomePage"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/AboutKashmir"
            className="hover:text-gray-300 transition duration-300 ease-in-out">
            About Kashmir
          </Link>
        </li>
        <li className="hover:text-gray-300 transition duration-300 ease-in-out">
          Gallery
        </li>
        <li>
          <Link to="/TravelUpdates"
           className="hover:text-gray-300 transition duration-300 ease-in-out">
          Travel Updates
          </Link>
        </li>

        <li> 
        <Link to="/contactUs"
            className="hover:text-gray-300 transition duration-300 ease-in-out">
          Contact Us
         </Link>
        </li>

        <li> 
            <Link to="/SignUp"
           className="hover:text-gray-300 transition duration-300 ease-in-out">
         SignUp
         </Link>
        </li>
      </ul>

      {/* Search Section */}
      <div className="relative flex items-center space-x-4">
        <p
          id="search"
          className="text-white text-2xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleSearchToggle}
        >
          <FontAwesomeIcon icon={faSearch} />
        </p>

        {searchOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded-lg shadow-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              onClick={handleSearchSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            >
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
