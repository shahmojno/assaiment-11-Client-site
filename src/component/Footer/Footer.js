import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-5'>
                <p>
                    <small>
                        Copyright @ /{year} Smart Phone All Right Reserved /
                    </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;