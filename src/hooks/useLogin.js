// import { useEffect, useState } from "react"

const useLogin = (email) => {
  fetch(`http://localhost:5000/user/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
  });
};
export default useLogin;
