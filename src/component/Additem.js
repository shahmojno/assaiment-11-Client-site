import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Myitem from './Myitem';



const Additems = () => {
    const [additems, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">

                {
                    additems.map(product => <Myitem
                        key={product._id}
                        product={product}
                    ></Myitem>)
                }
            </div>
        </div>


    );
};

export default Additems;



