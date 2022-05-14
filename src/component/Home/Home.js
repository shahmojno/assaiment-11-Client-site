import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../images/1.jpg';
import photo2 from '../../images/2.jpg';
import photo3 from '../../images/6.jpg';
import Additems from '../Additem';



const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Samsung Galaxy A73 5G</h3>
                        <p className='text-warning'>8/256 GB</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto mb-2"
                        src={photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary'>Samsung Galaxy A23</h3>
                        <p className='text-primary'>L6/128 GB</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src={photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Samsung Galaxy A03</h3>
                        <p>
                            4/64 GB
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Additems></Additems>
            </div>
        </div>


    );
};

export default Home;


