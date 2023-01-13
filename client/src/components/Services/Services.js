import { ServicesContainer } from "./Services.style";
import ServicesCard from "./ServicesCard";

// Import Images
import PhotographyImageMobile from "../../assets/mobile/image-photography.jpg"
import GraphicDesignImageMobile from "../../assets/mobile/image-graphic-design.jpg"

const Services = () => {
    return ( 
        <ServicesContainer>
            <ServicesCard title="Graphic design" bodyText="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention." mobile={GraphicDesignImageMobile} titleColor="var(--dark-green)" bodyColor="var(--dark-green)"/>
            <ServicesCard title="Photography" bodyText="Increase your credibility by getting the most stunning, high-quality photos that improve your business image." mobile={PhotographyImageMobile} titleColor="var(--dark-blue)" bodyColor="var(--dark-blue)"/>
        </ServicesContainer>
     );
}
 
export default Services;