import React from 'react';
import '../styles/ContactPage.scss';

const ContactPage = () => {
    return (
        <div className="contact">
            <div className="contact__info">
                <p className="contact__info-text">Schronisko dla Bezdomnych Psów w Łomży<br />18-400 Łomża,<br /> ul. Wojska Polskiego 136</p>
                <p className="contact__info-text"><i className="fas fa-phone"></i> 660464642</p>
                <p className="contact__info-text"><i className="fas fa-envelope"></i> schroniskoarka@gmail.com</p>
                <p className="contact__info-text">Adopcje w godzinach: <br /> pon.-piątek 9.00-14.00 <br /> sobota 10.00-12.00</p>
            </div>
            <div className="contact__map">
                <div><iframe className="contact__map-container" title="map" width="100%" height="400"
                    src="https://maps.google.com/maps?width=100%&height=100%&hl=en&coord=53.173531, 22.018460&q=Wojska%20Polskiego%20136%2C%2018-400%20%C5%81om%C5%BCa+()&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a href="https://www.mapsdirections.info/en/measure-map-radius/">Map radius measure</a></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;