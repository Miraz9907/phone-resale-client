import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({allcategory}) => {
    // console.log(allcategory);
    const {picture,title,_id} = allcategory
    return (

      <Link to={`/category/${_id}`}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="" src={picture} alt="phone" />
        </figure>
        <div className="card-body text-center">
          <h1 className="card-title text-center">{title}</h1>
        </div>
      </div>
      </Link>
    );
};

export default Categories;