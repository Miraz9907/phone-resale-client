import React, { useEffect, useState } from "react";

const AllSeller = () => {
  const [allSeller, setAllSeller] = useState([]);
  const role = "Seller";
  useEffect(() => {
    fetch(`http://localhost:5000/allusers?role=${role}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllSeller(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-3xl">All Seller</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((Seller, index) => (
              <tr key={Seller._id}>
                <th>{index + 1}</th>
                <td>{Seller.name}</td>
                <td>{Seller.email}</td>
                <td>
                  <button className="btn btn-xs btn-primary">Verify</button>
                </td>
                <td>
                  <button className="btn btn-xs text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
