import React from 'react';
import{ useLoaderData,Link } from 'react-router-dom';

const Products = () => {
    let productsInfo=useLoaderData()
    console.log(productsInfo);
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4'>
            {
           productsInfo.map((product)=>{
            const{id,description,category,image,rating,price}=product;
           
            return(
                <div className=' border-2 m-4 p-4'>
                   
                    <img src={image} alt=""  />
                  
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>{rating.count}</p>
                    <p>{price}</p>
                    <br /><br />
                    
                    <Link to={`/product/${id}`} className='border p-4 bg-blue-600'>order now</Link>
                   
                </div>
            
           )})}
        </div>
    );
};

export default Products;