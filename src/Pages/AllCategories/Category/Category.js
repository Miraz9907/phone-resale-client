import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import SingleCategory from "../SingleCategory/SingleCategory";

const Category = () => {
  const params = useParams();
  const id = params.id;
  // const [category, setCategory] = useState([]);
  const [phoneModel, setPhoneModel] = useState(null);

  const {
    data: category = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-phone-resale-server.vercel.app/categories?category=${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <p className="text-center text-secondary font-bold text-3xl">
        Available Phone
      </p>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {category.map((singleCategory) => (
          <SingleCategory
            key={singleCategory._id}
            singleCategory={singleCategory}
            setPhoneModel={setPhoneModel}
            refetch={refetch}
          ></SingleCategory>
        ))}
      </div>

      {phoneModel && (
        <BookingModal
          phoneModel={phoneModel}
          setPhoneModel={setPhoneModel}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default Category;
