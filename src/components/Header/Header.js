import React from 'react';
import './Header.scss';
import IconFB from '../SocialIcons/IconFB';
import IconIG from '../SocialIcons/IconIG';

const Header = () => {
    return (
        <div className="Header">
            <p>Nadácia Good Boy</p>
            <div className="iconsArea">
                <IconFB />
                <IconIG />
            </div>
        </div>
    );
}

export default Header;
