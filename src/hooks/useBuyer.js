import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://used-phone-resale-server.vercel.app/allusers/buyer/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isSeller);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};
export default useBuyer;
