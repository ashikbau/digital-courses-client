import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../assets/Brand/brand1.png';
import top2 from '../../assets/Brand/top2.jpeg';
import top3 from '../../assets/Brand/top3.jpeg'


const Home = () => {
    return (
        <Carousel>
            <h2> Education makes life eassy. So start your journey</h2>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={top2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={top3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    );
};

export default Home;