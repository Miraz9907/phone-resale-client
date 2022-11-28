import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from './Categories/Categories';

const AllCategories = () => {
    const [allCategories, setAllCategories] = useState( [] );

    useEffect( () =>{
        axios.get('http://localhost:5000/allcategories')
        .then(data => setAllCategories(data.data))
    },[])

    
    return (
        <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allCategories.map(allcategory => <Categories
                    key={allcategory._id}
                    allcategory = {allcategory}
                ></Categories>)
            }
        </div>
    );
};

export default AllCategories;