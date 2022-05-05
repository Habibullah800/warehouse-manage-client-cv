import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-grid'>
                <div className='footer-info'>
                    <h5>Help and Info</h5>
                    <h6> <a href='/'>Help</a></h6>
                    <h6> <a href='/'>Track order</a></h6>
                    <h6> <a href='/'>Delivery and return</a></h6>
                    <h6> <a href='/'>Premier delivery</a></h6>

                </div>
                <div className='footer-info'>
                    <h5>About Kent</h5>
                    <h6> <a href='/'>About us</a></h6>
                    <h6> <a href='/'>Our Team</a></h6>
                    <h6> <a href='/'> Help Line</a></h6>

                </div>
                <div className='footer-info me-5'>
                    <h5 className='mx-auto text-center'>More About</h5>
                    <h6> <a href='/'>Mobile Apps</a></h6>
                    <h6> <a href='/'>Our Showroom</a></h6>
                    <h6> <a href='/'> Our all team member</a></h6>

                </div>
                <div className='footer-info'>
                    <h5 className='mx-auto text-center'>Social site
                    </h5>
                    <div className='footer-icon mx-auto'>
                        <h6> <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/640px-Facebook_icon.svg.png' alt=''></img></a></h6>

                        <h6> <a href='/'><img src='https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg' alt=''></img></a></h6>

                        <h6> <a href='/'> <img width='28px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png' alt=''></img></a></h6>
                    </div>
                </div>
            </div>

            <h6 className='mx-auto text-center'><small> copyright © kent-Fashion 2022</small></h6>

        </div>
    );
};

export default Footer;