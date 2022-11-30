import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    // console.log(booking);
    const {location,model,price } = booking;

    return (
        <div>
            <h3>{booking.model} ar jonno taka dy</h3>
            <p className="text-xl">
                Please pay <strong>{price}BDT</strong> for the purchase{" "}
                <strong>{model}</strong> at {location}
            </p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;