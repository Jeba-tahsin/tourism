import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Guide></Guide>
        </div>
    );
};

export default Home;