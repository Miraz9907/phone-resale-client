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
        `http://localhost:5000/booked?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleStatusUpdate = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/advertiseupdate/${id}`, {
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
  return (
    <div>
      <h2>This is All user</h2>
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
                    <>Already advertise</>
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

export default MyProducts;
