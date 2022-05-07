import React from 'react';
import './Category.css'

const CAtegory = () => {
    return (
        <div>
            <h3 className='Category-heading'> Our product category </h3>
            <div className='category'>
                <div>
                    <img className='Category-title' width='60%' src='https://i.ibb.co/W3qjWYL/image-2.webp' alt='pic'></img>
                    <h5 className='Category-title'> Shorts <br></br> Top Collection</h5>
                </div>
                <div>
                    <img className='Category-title' width='60%' src='https://i.ibb.co/bPwr0Jj/image-3.webp' alt='pic'></img>
                    <h5 className='Category-title'> Skirt <br></br> New Collection </h5>
                </div>
                <div>
                    <img className='Category-title' width='60%' src='https://i.ibb.co/WsXdFKG/image-4.webp' alt='pic'></img>
                    <h5 className='Category-title'> Tank Top <br></br> Women Collection </h5>
                </div>
                <div>
                    <img className='Category-title' width='60%' src='https://i.ibb.co/Rv4jnqx/image-5.webp' alt='pic'></img>
                    <h5 className='Category-title'> Baby Shoes <br></br> Baby Collection </h5>
                </div>
                <div>
                    <img className='Category-title' width='60%' src='https://i.ibb.co/CJqLBfb/image-6.webp' alt='pic'></img>
                    <h5 className='Category-title'> Formal Baby <br></br> Baby Cloths </h5>
                </div>
            </div>
        </div>
    );
};

export default CAtegory;