import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const params = useParams();
    const id = params.id;

    const [category, setCategory] = useState([]);
    useEffect( () =>{
        fetch(`http://localhost:5000/categories?category_id=${id}`)
        .then(res => res.json())
        .then(data => setCategory(data))
    },[id]);
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                category.map(singleCategory => <SingleCategory
                key={singleCategory._id}
                singleCategory = {singleCategory}
                ></SingleCategory>)
            }
        </div>
    );
};

export default Category;