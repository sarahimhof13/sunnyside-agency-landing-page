import styled from "styled-components";
import MobileHeroImg from "../../assets/mobile/image-header.jpg"

export const HeroBannerContainer = styled.section`
    background: url(${MobileHeroImg});
    background-position: center;
    background-size: cover;
    padding: 144px 24px 136px 24px;
    text-align: center;
`

export const HeroBannerTitle = styled.h1`
    color: var(--white);
    margin-bottom: 52px;
`

export const ArrowDown = styled.img`

`