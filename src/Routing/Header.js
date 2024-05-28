import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Home from './Home';
import About from './/About';
import Contact from './Contact';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};

export default Header;