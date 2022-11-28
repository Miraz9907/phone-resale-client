import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllSeller = () => {

    const role = "Seller";
    const {data: allSeller = [], refetch} = useQuery({
        queryKey: ['allusers'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/allusers?role=${role}`);
            const data = await res.json();
            return data;
        }
    });

//   const [allSeller, setAllSeller] = useState([]);
//   const role = "Seller";
//   useEffect(() => {
//     fetch(`http://localhost:5000/allusers?role=${role}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setAllSeller(data);
//       });
//   }, []);

  const handleverifySeller = id =>{
    fetch (`http://localhost:5000/allusers/admin/${id}`,{
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount> 0) {
            toast.success('verified successfully')
            refetch();
        }
    })
}
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
                  {Seller?.sellerType!== 'verified'  && <button onClick={() => handleverifySeller(Seller._id)} className="btn btn-xs btn-primary">Verify</button>}
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
