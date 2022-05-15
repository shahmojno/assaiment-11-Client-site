import React from 'react';
import { useNavigate } from 'react-router-dom';



const ItemCode = ({ product }) => {
    const { _id, name, img, description, price, model } = product;
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/product/${_id}`);

    }



    return (



        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Model : {_id}</p>
                    <p className="card-text">Model : {model}</p>
                    <p className="card-text">Price : {price}</p>
                    <p className="card-text">Description : {description}</p>
                    <button onClick={() => navigateToProductDetails(_id)} className='btn btn-primary'>Details</button>

                </div>
            </div>
        </div>







    );
};

export default ItemCode;