import React from 'react';
import Services from './Services';
import { FaExchangeAlt, FaPhoneVolume, FaMobileAlt } from 'react-icons/fa';

const Service = () => {
    
    const shopData = [
        {
            id: 1,
            name: 'Exchange Offer',
            description: 'You can Exchange your old phone with New phone ',
            icons: <FaExchangeAlt/>, 
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Repair services',
            description: 'Our Expertise can do any kind. Within 3 working day we will return your device. ',
            icons: <FaMobileAlt/>,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Our shop time -> Open 9.00 am to 5.00 pm everyday. Contact us before you come. +8801345678910',
            icons: <FaPhoneVolume/>,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-center font-bold'>Services What We provide</h2>

            <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {

                    
                    shopData.map(shop => <Services
                    key = {shop.id}
                    shop ={shop}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Service;