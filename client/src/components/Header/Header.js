import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <header>
        <div className={ isPressed ? "menu-btn open" : "menu-btn" }
        onClick={() => setIsPressed(!isPressed)}>
            <span className={ isPressed ? "menu-btn__burger open" : "menu-btn__burger"}></span>
        </div>

        <nav className={ isPressed ? "nav open" : "nav" }>
            <ul className={ isPressed ? "menu-nav open" : "menu-nav" }>
                <li className={ isPressed ? "menu-nav__item open" : "menu-nav__item" }
                onClick={() => setIsPressed(!isPressed)}>
                    <NavLink to="/" activeClassName='is-active' className="menu-nav__item--link">Home</NavLink>
                </li>
                <li className={ isPressed ? "menu-nav__item open" : "menu-nav__item" }
                onClick={() => setIsPressed(!isPressed)}>
                    <NavLink to="/about" activeClassName='is-active' className="menu-nav__item--link">About</NavLink>
                </li>
                <li className={ isPressed ? "menu-nav__item open" : "menu-nav__item" }
                onClick={() => setIsPressed(!isPressed)}>
                    <NavLink to="/products" activeClassName='is-active' className="menu-nav__item--link">Products</NavLink>
                </li>
                <li className={ isPressed ? "menu-nav__item open" : "menu-nav__item" }
                onClick={() => setIsPressed(!isPressed)}>
                    <NavLink to="/contacts" activeClassName='is-active' className="menu-nav__item--link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;