import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className="menu-btn">
            <span className="menu-btn__burger"></span>
        </div>

        <nav className="nav">
            <ul className="menu-nav">
                <li className="menu-nav__item">
                    <NavLink to="/" activeClassName='is-active' className="menu-nav__item--link">Home</NavLink>
                </li>
                <li className="menu-nav__item">
                    <NavLink to="/about" activeClassName='is-active' className="menu-nav__item--link">About</NavLink>
                </li>
                <li className="menu-nav__item">
                    <NavLink to="/products" activeClassName='is-active' className="menu-nav__item--link">Products</NavLink>
                </li>
                <li className="menu-nav__item">
                    <NavLink to="/contacts" activeClassName='is-active' className="menu-nav__item--link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;