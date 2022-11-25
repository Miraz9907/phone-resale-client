import React from 'react';

const BookingModal = ({phoneModel,setPhoneModel}) => {
    const {name,resalePrice,} = phoneModel;

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const model = form.model.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            model,
            price,
            phone,
            location,
        }
        console.log(booking);
        setPhoneModel(null);

    }
    return (
        <>
            <input type="checkbox" id="booking-phone" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-phone" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='name' type="text" placeholder="user name" className="input w-full input-bordered" />
                    <input name='email' type="email" placeholder="user email" className="input w-full input-bordered" />
                    <input name='model' type="text" value={name} className="input w-full input-bordered" readOnly/>
                    <input name='price' type="text" value={resalePrice} className="input w-full input-bordered" readOnly />
                    <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                    <input name='location' type="text" placeholder="meeting location" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-primary w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;