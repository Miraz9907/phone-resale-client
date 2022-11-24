import React from 'react';
import AllCategories from '../../AllCategories/AllCategories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AllCategories></AllCategories>
            
        </div>
    );
};

export default Home;