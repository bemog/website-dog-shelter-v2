import React from 'react';
import DogPicture2 from '../images/Donation1.jpg';
import DogPicture1 from '../images/Donation2.jpg';
import '../styles/AboutPage.scss';

const AboutPage = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <p className='about__container-text'>Schronisko prowadzone jest przez Łomżyńskie Towarzystwo Opieki nad Zwierzętami i
        posiada status Organizacji Pożytku Publicznego,
        jest zarejestrowane w Krajowym Rejestrze Sądowym pod numerem:
        00 00 12 06 79. <br />Można przekazać 1% swojego podatku by wesprzeć naszą działalność.
          Za wszelką okazaną pomoc dziękujemy.</p>
        <img className='about__container-image' src={DogPicture1} alt="Zdjęcie wesołego psa" />
      </div>
      <div className='about__container'>
        <img className='about__container-image' src={DogPicture2} alt="Zdjęcie smutnego psa" />
        <p className='about__container-text'>DAROWIZNA
        Każda wpłacona złotówka jest dla nas bardzo cenna. Serdecznie dziękujemy za każdy odruch serca.
        <br />
        nr konta: 94 2030 0045 1110 0000 0192 1050
        <br />
        Łomżyńskie Towarzystwo Opieki nad Zwierzętami
        <br />
        ul. Śniadeckiego 6/32
        <br />
        18-400 Łomża
        <br />
          w tytule płatności wpisując "DAROWIZNA"</p>
      </div>
    </div>

  );
}

export default AboutPage;