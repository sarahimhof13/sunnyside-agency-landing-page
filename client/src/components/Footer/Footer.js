import { FooterContainer, Logo } from "./Footer.style";
import FooterNav from "./FooterNav";
import Socials from "./Socials";

import LogoImg from "../../assets/logo-footer.svg"

const Footer = () => {
    return ( 
        <FooterContainer>
            <Logo src={LogoImg}/>
            <FooterNav/>
            <Socials/>
        </FooterContainer>
     );
}
 
export default Footer;