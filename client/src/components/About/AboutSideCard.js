import { AboutSideCardContainer, AboutTitle, AboutBody, AboutLinkContainer, AboutLink, AboutLinkHighlight } from "./About.style";

const AboutSideCard = (props) => {
    return (
        <AboutSideCardContainer>
            <AboutTitle>{props.title}</AboutTitle>
            <AboutBody>{props.bodyText}</AboutBody>
            <AboutLinkContainer>
                <AboutLink to={props.linkAddress}>{props.linkName}</AboutLink>
                <AboutLinkHighlight backgroundColor={props.backgroundColor} />
            </AboutLinkContainer>
        </AboutSideCardContainer>
    );
}

export default AboutSideCard;