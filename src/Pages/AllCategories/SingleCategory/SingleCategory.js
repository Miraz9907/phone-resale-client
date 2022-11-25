import React from "react";

const SingleCategory = ({ singleCategory, setPhoneModel }) => {
//   console.log(singleCategory);
  const {
    location,
    name,
    originalPrice,
    picture,
    resalePrice,
    sellerName,
    usedYear,
    postedTime,
  } = singleCategory;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="w-full h-80" alt="phone" />
      </figure>
      <div className="card-body font-semibold text-xl">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3> Seller Name: {sellerName}</h3>
        <p> Location: {location}</p>
        <p>Used: {usedYear} years</p>
        <div className="card-actions justify-center">
          <div className="">Original Price: {originalPrice},</div>
          <div className=""> Resale Price : {resalePrice}</div>
        </div>
        <p> Posted Time: {postedTime}</p>
      </div>
      <div className="text-center my-5">
        <label 
            htmlFor="booking-phone" 
            className="btn text-center btn-primary "
            onClick={() => setPhoneModel(singleCategory)}
            >Book Now</label>
      </div>
    </div>
  );
};

export default SingleCategory;
