import React from "react";

const Services = ({ shop }) => {
  const { name, description, bgClass, icons } = shop;
  return (
    <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
      <div className="">
        <p className="m-auto text-3xl">{icons}</p>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services;
