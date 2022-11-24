import React from 'react';
import banner from '../../../assests/images/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Phone Resale</h1>
      <p className="mb-5 text-4xl">Best Prices, Best <br /> <span className='font-bold text-orange-500'>Products, Buy Now</span></p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;