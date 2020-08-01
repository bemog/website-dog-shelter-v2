import React from 'react';
import '../styles/PawsBackground.scss';
import paws from '../images/Paws.png';

const PawsBackground = () => {
    return (
        <div className="paws-background">
            <img
                className="paws-background__image"
                src={paws}
                alt="Ślady psich łap" />
        </div>
    );
}

export default PawsBackground;