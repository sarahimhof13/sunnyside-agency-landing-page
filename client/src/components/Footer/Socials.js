import { SocialsContainer, SocialsIcon } from "./Footer.style";

// Import images
import FacebookIcon from "../../assets/icon-facebook.svg"
import InstagramIcon from "../../assets/icon-instagram.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"
import PinterestIcon from "../../assets/icon-pinterest.svg"

const Socials = () => {
    return ( 
        <SocialsContainer>
            <SocialsIcon src={FacebookIcon}/>
            <SocialsIcon src={InstagramIcon}/>
            <SocialsIcon src={TwitterIcon}/>
            <SocialsIcon src={PinterestIcon}/>
        </SocialsContainer>
     );
}
 
export default Socials;