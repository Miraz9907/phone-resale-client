import React from 'react';
import AllCategories from '../../AllCategories/AllCategories';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <Advertisement></Advertisement>
            <Service></Service>
            
        </div>
    );
};

export default Home;