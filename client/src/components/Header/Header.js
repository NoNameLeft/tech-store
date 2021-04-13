import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from '@fortawesome/fontawesome-free-solid'

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
                <li className={ IsMenuLinkPressed }>
                    <NavLink to="/cart" className="menu-nav__item--link">My Cart <FontAwesomeIcon icon={faShoppingBag} /><label className="lblCartCount ">3</label> </NavLink>
                </li>
                {/* <li className={ IsMenuLinkPressed }>
                    <NavLink to="/login" className="menu-nav__item--link">Login</NavLink>
                </li>
                <li className={ IsMenuLinkPressed }>
                    <NavLink to="/register" className="menu-nav__item--link">Register</NavLink>
                </li> */}
            </ul>
        </nav>
        </header>
    );
};

export default Header;