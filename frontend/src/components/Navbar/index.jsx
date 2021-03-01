import React from 'react';
import {
    Nav,
    NavbarBrand, 
    NavbarItems,
    NavbarItem
} from './Nav.styles';

const Navbar = () => {
    return (
        <Nav>
            <NavbarBrand>
                Movie Box
            </NavbarBrand>
            <NavbarItems>
                <NavbarItem activeClassName="active" exact to="/">Home</NavbarItem>
                <NavbarItem activeClassName="active" to="/Movies">Movies</NavbarItem>
            </NavbarItems>
        </Nav>
    )
}

export default Navbar;



