import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useCount from '../../Hookes/useCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const Product = () => {
    let productInfo=useLoaderData()
    let {count,increment,decrement}=useCount(1)
    console.log(productInfo);
    return (
        <div>
          
            <h2>Product Details</h2>
            <div className=' border-2 m-4 p-4'> 
               <img src={productInfo.image} alt="" />
                <p>{productInfo.title}</p>
                <p>{productInfo.description}</p>
                <p>{productInfo.category}</p>
                <p>{productInfo.rating.count}</p>
                <p>{productInfo.price}</p>
                <p>Item :{count}</p>
                <div className='flex gap-2'>
                 <button onClick={increment} className='border'><FontAwesomeIcon icon={faPlus} /> </button><br /><br />
                <button onClick={decrement} className='border '><FontAwesomeIcon icon={faMinus} /> </button>
                </div>
                <p className='font-bold '>price:{productInfo.price*count}</p>
                
               
            </div>
        </div>
    );
};

export default Product;