import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    background: linear-gradient(220deg, #040f0f , #2d3a3a );
    color: white;
`

export const NavbarBrand = styled.h2`
    font-size: clamp(1.2rem, 3vw, 1.5rem);
`

export const NavbarItems = styled.div`
`
export const NavbarItem = styled(NavLink)`
    padding: 0 0.5rem;
    text-decoration: none;
    color: white;
    &.active{
        color: #2BA84A;
    }
    &:hover{
        color: #248232;
    }
`