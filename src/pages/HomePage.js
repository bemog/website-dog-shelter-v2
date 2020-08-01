import React from 'react';
import '../styles/HomePage.scss';
import dog from '../images/dog.png';
import dogTail from '../images/dogtail.png';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__welcome">
        <div className="home__welcome-dogtail">
          <img className="home__welcome-dogtail-image" src={dogTail} alt="Ogon psa" />
        </div>
        <div className="home__welcome-dog">
          <img className="home__welcome-dog-image" src={dog} alt="Zdjęcie psa" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;