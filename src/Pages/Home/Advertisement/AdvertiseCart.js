import React from "react";

const AdvertiseCart = ({ category }) => {
  const {
    name,
    picture,
    originalPrice,
    sellerName,
    resalePrice,
    usedYear,
    postedTime,
  } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>

        <p>Resale Price: ${resalePrice}</p>
        <p>Origal Price: ${originalPrice}</p>
        <p>Range of Used: {usedYear} Year </p>
        <p>Post On: {postedTime?.slice(0, 10)}</p>
        <p>Saler: {sellerName}</p>
      </div>
    </div>
  );
};

export default AdvertiseCart;
