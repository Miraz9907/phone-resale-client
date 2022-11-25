import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assests/images/banner.png";

const NotFound = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div>
            <h1 className="text-9xl py-5 px-6 rounded-lg bg-gradient-to-r font-bold from-orange-500 via-pink-500 to-red-500">
              OOPS!
            </h1>
          </div>
          <div>
            <h1 className="text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-400 to-orange-800 ">
              404!
            </h1>
          </div>
          <div>
            <h3 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Page Not Found
            </h3>
          </div>
          <div>
            <Link to="/">
              <button className="p-3 my-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Back To Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
