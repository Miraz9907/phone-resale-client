// import { useEffect, useState } from "react"

const useLogin = (email) => {
  fetch(`https://used-phone-resale-server.vercel.app/user/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
  });
};
export default useLogin;
