import React from 'react';

const Categories = ({allcategory}) => {
    // console.log(allcategory);
    const {picture,title} = allcategory
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  </div>
</div>
    );
};

export default Categories;