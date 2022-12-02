import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const role = "Seller";
  const { data: allSeller = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-phone-resale-server.vercel.app/allusers?role=${role}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleStatusUpdate = (id, email) => {
    console.log(id, email);
    fetch(
      `https://used-phone-resale-server.vercel.app/verifiedcataupdate/${email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ verified: "true" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Veryfied!");
          refetch();
        }
      });
    fetch(`https://used-phone-resale-server.vercel.app/verifiedupdate/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verified: "true" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Veryfied!");
          refetch();
        }
      });
  };

  const handleSellerDelete = (id) => {
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
                  {Seller.verified !== "true" ? (
                    <>
                      <label
                        className="btn btn-xs btn-primary"
                        htmlFor="booking-phone"
                        onClick={() =>
                          handleStatusUpdate(Seller._id, Seller.email)
                        }
                      >
                        Verify
                      </label>
                    </>
                  ) : (
                    <>
                      <label
                        className="btn btn-disabled"
                        htmlFor="booking-phone"
                      >
                        verified
                      </label>
                    </>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-xs bg-red-400 text-black"
                    onClick={() => handleSellerDelete(Seller._id)}
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
  );
};

export default AllSeller;
