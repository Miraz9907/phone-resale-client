import React from "react";
import toast from "react-hot-toast";
import { GoVerified } from "react-icons/go";


const SingleCategory = ({ singleCategory, setPhoneModel, refetch }) => {
  //   console.log(singleCategory);
  const {
    _id,
    verified,
    location,
    name,
    originalPrice,
    picture,
    resalePrice,
    sellerName,
    usedYear,
    postedTime,
  } = singleCategory;

  const handleStatusUpdate = (id) => {
    toast.success("Successfully Reported!");

    console.log(id);
    fetch(`https://used-phone-resale-server.vercel.app/reportupdate/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ report: "true" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="w-full h-80" alt="phone" />
      </figure>
      <div className="card-body font-semibold text-xl">
        <h2 className="card-title">
          {name}
          {
          verified!=='false'?
          <>
          <div className="badge badge-secondary"><GoVerified className="text-sky-500" /></div>
          </>:<></>

        }
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
      <div className=" flex justify-center items-center text-center my-5">
        <label
          htmlFor="booking-phone"
          className="btn text-center btn-primary mr-2 "
          onClick={() => setPhoneModel(singleCategory)}
        >
          Book Now
        </label>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn text-center btn-primary "
        >
          {" "}
          Report Item
        </button>
      </div>
    </div>
  );
};

export default SingleCategory;
