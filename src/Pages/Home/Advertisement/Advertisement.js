import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCart from "./AdvertiseCart";

const Advertisement = () => {
  const { data: mydata = [] } = useQuery({
    queryKey: ["allrole"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-phone-resale-server.vercel.app/mydata?advertise=true"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {mydata.length > 0 ? (
        <>
          <h2 className="text-3xl text-center font-semibold text-secondary mt-16">Advertised Item</h2>
        </>
      ) : (
        <></>
      )}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6 ">
        {mydata.map((category) => (
          <AdvertiseCart key={category._id} category={category}></AdvertiseCart>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
