import React from 'react';

const DogCard = (props) => {
    return (
        <div className='adoption__container-card'>
            <a className='adoption__container-card-link' href={props.link} target='_blank' rel='noopener noreferrer'>
                <img className='adoption__container-card-link-image' src={props.image} alt={props.name} />
                <span className='adoption__container-card-link-name'>{props.name}</span>
            </a>
        </div>
    );
}

export default DogCard;