import React from 'react';
import AllCategories from '../../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <Service></Service>
            
        </div>
    );
};

export default Home;