import { HeroBannerContainer, HeroBannerTitle, ArrowDown } from "./HeroBanner.style";

import ArrowDownIcon from "../../assets/icon-arrow-down.svg"

const HeroBanner = () => {
    return ( 
        <HeroBannerContainer>
            <HeroBannerTitle>We Are Creatives</HeroBannerTitle>
            <ArrowDown src={ArrowDownIcon}/>
        </HeroBannerContainer>
     );
}
 
export default HeroBanner;