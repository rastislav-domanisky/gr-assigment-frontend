import React from 'react';
import "./Footer.scss";
import FooterContent from './FooterContent/FooterContent';
import Logo from './../Logo/Logo';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footerLogo">
                <Logo />
            </div>
            <FooterContent title="Nadácia Good Boy">
                O projekte <br />
                Ako na to <br />
                Kontakt <br />
            </FooterContent>
            <FooterContent title="Nadácia Good Boy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
            </FooterContent>
            <FooterContent title="Nadácia Good Boy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
            </FooterContent>
        </footer>
    );
}

export default Footer;
