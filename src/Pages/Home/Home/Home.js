import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Guide></Guide>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;