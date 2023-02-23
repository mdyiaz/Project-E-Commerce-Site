import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddToCart = () => {
    
    const adjectProduct = useLoaderData();
    return (
        <div>
            <h1>{adjectProduct.name}</h1>
        </div>
    );
};

export default AddToCart;