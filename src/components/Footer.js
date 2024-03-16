import React from 'react';
import "../css/main_style.css";
import { IonIcon } from '@ionic/react';


function FooterContainer() {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon name="logo-facebook"></IonIcon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon name="logo-twitter"></IonIcon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon name="logo-linkedin"></IonIcon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon name="logo-instagram"></IonIcon>
                    </a>
                </li>
            </ul>
            <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
                <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                <li className="menu__item"><a className="menu__link" href="/services">Services</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
            </ul>
            <p>&copy;2021 Pet Hospital| All Rights Reserved</p>
        </footer>
    );
}

export default FooterContainer;
