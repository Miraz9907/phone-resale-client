import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: mydata = [], refetch } = useQuery({
    queryKey: ["allrole"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-phone-resale-server.vercel.app/booked?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleStatusUpdate = (id) => {
    console.log(id);
    fetch(`https://used-phone-resale-server.vercel.app/advertiseupdate/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: "true" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Adertise");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete ?");
    if (proceed) {
      fetch(`https://used-phone-resale-server.vercel.app/deleteproduct/${id}`, {
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
      <h2 className="text-3xl">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((users, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>{users.sellerName}</td>
                <td>{users.email}</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={users.picture} alt="phone" />
                    </div>
                  </div>
                </td>
                <td>{users?.isSoled !== "false" ? <>Sold</> : <>Unsold</>}</td>

                <td>
                  {users?.advertise !== "false" ? (
                    <p className="bg-sky-400 ">Already advertise</p>
                  ) : (
                    <>
                      <button
                        className="btn btn-xs btn-primary"
                        onClick={() => handleStatusUpdate(users._id)}
                      >
                        Advertise
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-xs text-red-400"
                    onClick={() => handleDelete(users._id)}
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

export default MyProducts;
