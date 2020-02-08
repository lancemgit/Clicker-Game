import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const MyNavbar = () => {

    return (
        <div>
            <Navbar color="dark" light>
                <NavbarBrand href="/" className="mx-auto" style={{ color: "white" }}>Clicker Game</NavbarBrand>
            </Navbar>
        </div >
    );
}

export default MyNavbar;
