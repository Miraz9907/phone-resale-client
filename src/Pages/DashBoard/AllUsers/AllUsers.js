import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null);

  const closeModal =() =>{
    setDeleteUser(null);
  }

  
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = user =>{
    fetch(`http://localhost:5000/allusers/${user._id}`,{
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
        refetch();
        toast.success(`deleted successfully`)
      }
      
    })
  }

  // const handleMakeAdmin = id =>{
  //     fetch (`http://localhost:5000/allusers/admin/${id}`,{
  //         method: 'PUT',
  //         headers: {
  //             authorization: `bearer ${localStorage.getItem('accessToken')}`
  //         }
  //     })
  //     .then(res => res.json())
  //     .then(data =>{
  //         if(data.modifiedCount> 0) {
  //             toast.success('make admin successfully')
  //             refetch();
  //         }
  //     })
  // }

  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>UserType</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((users, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.role}</td>
                <td>
                  <label
                    onClick={() => setDeleteUser(users)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs text-red-400"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteUser && <ConfirmationModal
        title = {`Are sure that you want to delete? ${deleteUser.name}`}
        message= {`You cannot recover ${deleteUser.name}, if its deleted onece`}
        closeModal = {closeModal}
        successAction = {handleDeleteUser}
        modalData = {deleteUser}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default AllUsers;
