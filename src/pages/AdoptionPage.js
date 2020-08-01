import React from 'react';
import '../styles/AdoptionPage.scss';
import DogCard from '../components/DogCard';
import Lena from '../images/Adoption/Lena.jpg';
import Lomek from '../images/Adoption/Lomek.jpg';
import Ryki from '../images/Adoption/Ryki.jpg';
import Sopel from '../images/Adoption/Sopel.jpg';
import Misiek from '../images/Adoption/Misiek.jpg';
import Roki from '../images/Adoption/Roki.jpg';
import Iger from '../images/Adoption/Iger.jpg';

const dogsCards = [
  {
    name: 'Lena', image: Lena, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1450475681804686/1450474111804843/?type=3&theater'
  },
  {
    name: 'Lomek', image: Lomek, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1448812588637662/1448811641971090/?type=3&theater'
  },
  {
    name: 'Ryki', image: Ryki, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1447209955464592/1447209685464619/?type=3&theater'
  },
  {
    name: 'Sopel', image: Sopel, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/a.188033371382263/1446375088881412/?type=3&theater'
  },
  {
    name: 'Misiek', image: Misiek, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1442193199299601/1442192879299633/?type=3&theater'
  },
  {
    name: 'Roki', image: Roki, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1438724419646479/1438723319646589/?type=3&theater'
  },
  {
    name: 'Iger', image: Iger, link: 'https://pl-pl.facebook.com/schroniskodlabezdomnychpsowlomza/photos/pcb.1437805333071721/1437804983071756/?type=3&theater'
  },
]

const AdoptionPage = () => {
  const dogs = dogsCards.map(dog => (
    <DogCard
      name={dog.name}
      image={dog.image}
      link={dog.link}
    />
  ))

  return (
    <div className='adoption'>
      <h2 className='adoption__title'>Czekają na adopcję:</h2>
      <div class="adoption__container">
        {dogs}
      </div>
    </div>
  );
}

export default AdoptionPage;