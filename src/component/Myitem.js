import React from 'react';
import { useNavigate } from 'react-router-dom';



const Myitem = ({ product }) => {
    const { id: _id, name, img, description, price, model } = product;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/product/${id}`);

    }




    return (


        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Model : {model}</p>
                    <p className="card-text">Price : {price}</p>
                    <p className="card-text">Description : {description}</p>

                </div>
            </div>
        </div>




    );
};

export default Myitem;






