import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemCode from './ItemCode';
import './Myitem.css'




const Myitem = () => {
    const [additems, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://evening-escarpment-39400.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <div className='container'>
            <h1 className='my-item'>My items</h1>
            <div className="row">

                {
                    additems.map(product => <ItemCode
                        key={product._id}
                        product={product}
                    ></ItemCode>)
                }
            </div>
        </div>


    );
};

export default Myitem;










