import React from 'react';

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className='social-icon'>
                <p><i style = {{fontSize : '40px'}} className="fab fa-facebook-square"></i></p>
                <p><i style = {{fontSize : '40px'}} className="fab fa-github-square"></i></p>
                <p><i style = {{fontSize : '40px'}} class="fab fa-linkedin"></i></p>
            </div>
        </div>
    );
};

export default Footer;