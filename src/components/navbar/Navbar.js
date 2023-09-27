import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    ButtonWrapper, 
    Button
} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";






const Navbar = () => {

    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><Link to="/"><img src={logo} alt="logo" /></Link>
                </LogoContainer>
                <BigLinkContainer>
                    <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Home</Link></NavbarLink>
                    <NavbarLink> <Link to='/sustainable-milestones' style={{ textDecoration: 'none', color: 'white' }}>Sustainable Milestones</Link></NavbarLink>
                    <NavbarLink> <Link to='/recycling-centres' style={{ textDecoration: 'none', color: 'white' }}>Recycling Centres</Link></NavbarLink>
                    <NavbarLink><Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>About us </Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper><div class="dropdown">
                    <button class="dropbtn"><img src={user} alt="user" width={13} height={13} />
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }}>Sign in</Link>
                        <br></br>
                        <Link to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>Sign up</Link>
                        <br></br>
                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </div>
                </div>
                  <Button>Connect Wallet</Button>
                    </ButtonWrapper>


            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;