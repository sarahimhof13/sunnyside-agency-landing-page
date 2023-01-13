import AboutSideCard from "./AboutSideCard";
import { AboutContainer, AboutImg } from "./About.style";

import TransformImgMobile from "../../assets/mobile/image-transform.jpg";
import StandOutImgMobile from "../../assets/mobile/image-stand-out.jpg"

const About = () => {
    return (
        <AboutContainer>
            <AboutImg mobile={TransformImgMobile} />
            <AboutSideCard title="Transform your brand" bodyText="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." linkName="Learn more" linkAddress="/" backgroundColor="var(--yellow)" />
            <AboutImg mobile={StandOutImgMobile} />
            <AboutSideCard title="Stand out to the right audience" bodyText="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." linkName="Learn more" linkAddress="/" backgroundColor="var(--red)" />
        </AboutContainer>
    );
}

export default About;