import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './Hooks/ProductDetails';

const Manageitem = () => {
    const { productId } = useParams();
    const [product] = ProductDetails(productId);


    return (
        <div>

            <div className='text-center mt-5'>
                <h1>Item Details : </h1>
                <p>Name : {product.name}</p>
                <p>Model : {product.model}</p>
                <p>Price : {product.price}</p>


            </div>
        </div>
    );
};

export default Manageitem;


