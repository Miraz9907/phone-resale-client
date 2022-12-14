import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ phoneModel, setPhoneModel, refetch }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { name, resalePrice, picture } = phoneModel;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const model = form.model.value;
    const picture = form.image.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      name,
      email,
      model,
      picture,
      price,
      phone,
      location,
    };
    fetch("https://used-phone-resale-server.vercel.app/bookingsphone", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setPhoneModel(null);
          toast.success("Your booking is confirmed");
          refetch();
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-phone" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-phone"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              value={user?.displayName}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="model"
              type="text"
              value={name}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="image"
              type="text"
              value={picture}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="price"
              type="text"
              value={resalePrice}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input w-full input-bordered"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="meeting location"
              className="input w-full input-bordered"
              required
            />
            <br />

            <input
              className="btn btn-primary w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
