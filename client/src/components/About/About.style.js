import styled from "styled-components";
import { Link } from "react-router-dom";

// Import Images
import TransformMobileImg from "../../assets/mobile/image-transform.jpg"
import StandOutMobileImg from "../../assets/mobile/image-stand-out.jpg"

export const AboutContainer = styled.section`

`
export const AboutSideCardContainer = styled.article`
    padding: 64px 24px;
    text-align: center;
`

export const AboutTitle = styled.h2`
    color: var(--dark-grey);
    margin-bottom: 24px;
`

export const AboutBody = styled.p`
    margin-bottom: 24px;
    color: var(--grey);
`

export const AboutLinkContainer = styled.div`
    position: relative;
`

export const AboutLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
    color: var(--dark-grey);
    letter-spacing: 0.063rem;
    font-size: 0.938rem;
`

export const AboutLinkHighlight = styled.div`
    background-color: ${(props) => props.backgroundColor};
    width: 137px;
    height: 10px;
    border-radius: 28px;
    opacity: 25%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
    z-index: -1;
`

export const AboutImg = styled.div`
    background-image: url(${(props) => props.mobile});
    background-size: cover;
    background-position: center;
    width: auto;
    height: 312px;
`

export const StandOutImg = styled.img`

`