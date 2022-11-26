import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookedPhone = () => {
    const { user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookingsphone?email=${user?.email}`;

    const { data: bookingsphone = []} = useQuery({
        queryKey: ["bookingsphone", user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">Booked Phone</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
   <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Brand</th>
        <th>Model</th>
        <th>UserType</th>
      </tr>
    </thead>
    <tbody>
      {
        bookingsphone.map((phone, index) => <tr key={phone._id}>
            <th>{index+1}</th>
            <th>{phone.picture}</th>
            <td>Cy Ganderton</td>
            <td>{phone.model}</td>
            <td>Blue</td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookedPhone;