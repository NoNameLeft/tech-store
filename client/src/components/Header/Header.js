import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isPressed, setIsPressed] = useState(false);
    var IsMenuLinkPressed = isPressed ? "menu-nav__item open" : "menu-nav__item";
    return (
        <header>
        <div className={ isPressed ? "menu-btn open" : "menu-btn" }
        onClick={() => setIsPressed(!isPressed)}>
            <span className={ isPressed ? "menu-btn__burger open" : "menu-btn__burger"}></span>
        </div>

        <nav className={ isPressed ? "nav open" : "nav" }>
            <ul className={ isPressed ? "menu-nav open" : "menu-nav" } onClick={() => setIsPressed(!isPressed)}>
                <li className={ IsMenuLinkPressed }>
                    <NavLink exact={true} to="/" className="menu-nav__item--link">Home</NavLink>
                </li>
                <li className={ IsMenuLinkPressed }>
                    <NavLink to="/about" className="menu-nav__item--link">About</NavLink>
                </li>
                <li className={ IsMenuLinkPressed }>
                    <NavLink to="/products" className="menu-nav__item--link">Products</NavLink>
                </li>
                <li className={ IsMenuLinkPressed }>
                    <NavLink to="/contacts" className="menu-nav__item--link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;