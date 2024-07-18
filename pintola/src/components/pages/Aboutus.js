import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Aboutus = () => {
    useEffect(() => {
        AOS.init({}); 
      }, []);
    return (
        <div className='about'>

            <h2 className='he'>Our Mission & Vision</h2>
            <p>To serve more than 100 million people with the healthy, delicious and ready-to-eat food products.</p>
            <p>To achieve continuous business growth together with our stakeholders including farmers, exporters and distributors.</p>
            <p>We strive to be the best company in India for peanut butter and related products. We endeavor to achieve this goal by providing competitive products in all means.</p>
            <img src="https://pintola.in/cdn/shop/files/desktop_size_2500x.jpg?v=1620836643" data-aos="fade-up"></img>
            <img  className="im" src="https://pintola.in/cdn/shop/files/Asset_7_150x-100_2500x.jpg?v=1678087744" data-aos="fade-up"></img>
          
        </div>
    )
}

export default Aboutus
