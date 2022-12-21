import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";

const AllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://used-phone-resale-server.vercel.app/allcategories")
      .then((data) => setAllCategories(data.data));
  }, []);

  return (
    <div>
      <h1 className="mt-16 text-center text-3xl font-semibold text-secondary">All Categories</h1>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allCategories.map((allcategory) => (
        <Categories
          key={allcategory._id}
          allcategory={allcategory}
        ></Categories>
      ))}
    </div>
    </div>
  );
};

export default AllCategories;
