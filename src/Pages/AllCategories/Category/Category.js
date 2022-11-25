import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h2>This is category details: {category.length}</h2>
        </div>
    );
};

export default Category;