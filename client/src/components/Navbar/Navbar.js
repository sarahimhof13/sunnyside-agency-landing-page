import { NavbarContainer, Logo } from "./Navbar.style";
import LogoImg from "../../assets/logo.svg"
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    return ( 
        <NavbarContainer>
            <Logo src={LogoImg}/>
            <HamburgerMenu />
        </NavbarContainer>
     );
}
 
export default Navbar;