import React, { useEffect, useState } from 'react';
import Categories from './Categories/Categories';

const AllCategories = () => {
    const [allCategories, setAllCategories] = useState( [] );

    useEffect( ()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setAllCategories(data))

    },[])
    return (
        <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allCategories.map(allcategory => <Categories
                    key={allcategory.id}
                    allcategory = {allcategory}
                ></Categories>)
            }
        </div>
    );
};

export default AllCategories;