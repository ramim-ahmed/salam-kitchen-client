import React from 'react';
import SearchFood from '../SearchFood/SearchFood';

const Banner = () => {
    return (
        <div className="banner-container">
            <header>
                <div className="header-content">
                    <h1>Best food waiting for your belly</h1>
                    <SearchFood/>
                </div>
            </header>
        </div>
    );
};

export default Banner;