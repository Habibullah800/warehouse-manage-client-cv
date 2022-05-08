import React, { useEffect, useState } from 'react';
import Delivery from '../Delivery/Delivery';
import Product from '../product/Product';
import './Products.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='title'>
            <h2 className='text-primary'>Special Telemedicine Service Dr. on Demand</h2>
            <hr></hr>
            <h3>Our treatment</h3>
            <div className='service-container'>

                {
                    services.slice(0, 6).map(service => <Product
                        key={service._id}
                        service={service}

                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Services;