import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const role = "Buyer";
  const { data: allBuyer = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-phone-resale-server.vercel.app/allusers?role=${role}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleBuyerDelete = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete ?");
    if (proceed) {
      fetch(`https://used-phone-resale-server.vercel.app/deleteuser/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Adertise");
            refetch();
          }
        });
    }
  };
  return (
    <div>
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
              {allBuyer.map((buyer, index) => (
                <tr key={buyer._id}>
                  <th>{index + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                    <button
                      className="btn btn-xs bg-red-400 text-black"
                      onClick={() => handleBuyerDelete(buyer._id)}
                    >
                      Delete
                    </button>
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
