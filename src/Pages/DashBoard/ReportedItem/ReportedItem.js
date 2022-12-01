import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ReportedItem = () => {
  const { data: reportedItem = [], refetch } = useQuery({
    queryKey: ["allrole"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allproduct?report=true`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted");
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
                <th>Phone Model</th>
                <th>Original Price</th>
                <th>Resale Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reportedItem.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.sellerName}</td>
                  <td>{item.name}</td>
                  <td>{item.originalPrice}</td>
                  <td>{item.resalePrice}</td>
                  <td>
                    <button
                      className="btn btn-xs text-red-400"
                      onClick={() => handleDelete(item._id)}
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

export default ReportedItem;
