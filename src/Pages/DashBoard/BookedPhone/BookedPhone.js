import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookedPhone = () => {
  const { user } = useContext(AuthContext);

  const url = `https://used-phone-resale-server.vercel.app/bookingsphone?email=${user?.email}`;

  const { data: bookingsphone = [] } = useQuery({
    queryKey: ["bookingsphone", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl mb-5">Booked Phone {bookingsphone.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Image</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Payment</th>
            </tr>
          </thead>

          <tbody>
            {bookingsphone?.length &&
              bookingsphone?.map((phone, index) => (
                <tr key={phone._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={phone.picture} alt="phone" />
                      </div>
                    </div>
                  </td>
                  <td>{phone.category}</td>
                  <td>{phone.model}</td>
                  <td>
                    {phone.price && !phone.paid && (
                      <Link to={`/dashboard/payment/${phone._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {phone.price && phone.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedPhone;
