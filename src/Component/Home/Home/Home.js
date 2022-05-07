import React from 'react';
import Banner from '../Banner/Banner';
import CAtegory from '../Category/CAtegory';
import Feature from '../Feature/Feature';
import Products from '../products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CAtegory></CAtegory>
            <Feature></Feature>
        </div>
    );
};

export default Home;