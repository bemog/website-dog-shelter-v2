import React from 'react';
import '../styles/VolunteeringPage.scss';

import picture1 from '../images/Volunteer1.jpg'
import picture2 from '../images/Volunteer2.jpg'
import picture3 from '../images/Volunteer3.jpg'

const VolunteeringPage = () => {
    return (
        <div className="volunteering">
            <h2 className="volunteering__title">Wolontariat</h2>
            <p className="volunteering__text">Każdy młody człowiek ma w sobie olbrzymi potencjał współczucia i miłości. Jaki? Niech za odpowiedź
            posłuży ta
        przypowieść:</p>
            <p className="volunteering__text"> Pewnego dnia morze wyrzuciło na plażę wiele pięknych rozgwiazd, które bez wody morskiej nie potrafią
            żyć.
            Idąca brzegiem morza mała dziewczynka zaczęła wrzucać je do morza. Mężczyzna, który obserwował
            dziewczynkę
            powiedział: - "Po co to robisz? Przecież i tak nie uratujesz wszystkich" - "Ale dla tych, które
            wrzuciłam
        zrobiłam tyle ile mogłam zrobić najwięcej."</p>
            <p className="volunteering__text">Takich „dziewczynek” jest więcej – tworzą wolontariat schroniska. Pomagają pracownikom w karmieniu i
            pojeniu
            psów, wychodzą na spacery, ale najważniejsze jest to, że okazują podopiecznym "Arki" dużo czułości i
            dzięki
        temu psy - często skrzywdzone przez ludzi - ponownie zaczynają ufać.</p>
            <p className="volunteering__text"> Ty też możesz zostać wolontariuszem, warunkiem jest ukończenie 18 lat i zapał do pracy ze zwierzętami.
        Jeśli masz ukończone 18 lat i chcesz pomagać psom w naszym schronisku - serdecznie zapraszamy!</p>
            <div className="volunteering__gallery">
                <img className="volunteering__gallery-picture" src={picture1} alt="Dziewczyna bawiąca się z psem" />
                <img className="volunteering__gallery-picture" src={picture2} alt="Dziewczyna bawiąca się z psem" />
                <img className="volunteering__gallery-picture" src={picture3} alt="Dziewczyna bawiąca się z psem" />
            </div>
        </div>
    );
}

export default VolunteeringPage;