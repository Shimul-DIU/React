import React from 'react';
import{ useLoaderData } from 'react-router-dom';

const Product = () => {
    let productInfo=useLoaderData()
    console.log(productInfo);
    return (
        <div>
          
            <h2>Product Details</h2>
            <div className=' border-2 m-4 p-4'> 
                <img src={productInfo.image} alt={productInfo.title} />
                <p>{productInfo.title}</p>
                <p>{productInfo.description}</p>
                <p>{productInfo.category}</p>
                <p>{productInfo.rating.count}</p>
                <p>{productInfo.price}</p>
            </div>
        </div>
    );
};

export default Product;