import React, { useEffect, useState } from "react";

const AllBuyer = () => {
  const [allBuyer, setAllBuyer] = useState([]);
  const role = "Buyer";
  useEffect(() => {
    fetch(`http://localhost:5000/allusers?role=${role}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBuyer(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-3xl">All Buyers {allBuyer.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBuyer.map((Seller, index) => (
                <tr key={Seller._id}>
                  <th>{index + 1}</th>
                  <td>{Seller.name}</td>
                  <td>{Seller.email}</td>
                  <td>
                    <button className="btn btn-xs text-red-400">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyer;
