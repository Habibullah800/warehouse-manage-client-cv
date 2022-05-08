import useProducts from '../../Hooks/useProduct';
import Product from '../product/Product';
import './Products.css'

const Services = () => {
    const [products] = useProducts();


    return (
        <div className='title'>
            <h2 className='text-primary'>Special Telemedicine Service Dr. on Demand</h2>
            <hr></hr>
            <h3>Our treatment</h3>
            <div className='service-container'>

                {
                    products.slice(0, 6).map(service => <Product
                        key={service._id}
                        service={service}

                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Services;