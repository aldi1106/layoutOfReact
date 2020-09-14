import React from 'react';

// import './Navbar.css';

import {HeaderLink, LinkActive, Link, LinkRight} from './Navbar.style';

const Navbar = () => {
    return (
        <HeaderLink>
            <LinkActive href="#qtemu"><b>Qtemu</b></LinkActive>
            <Link href="#CreateMeetup">Create Meetup</Link>
            <Link href="#Explore">Explore</Link>
         
            <LinkRight>
                <Link href="#Login">Login</Link>
            </LinkRight>
            </HeaderLink>
    );
}

export default Navbar;