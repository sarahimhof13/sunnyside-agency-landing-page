import styled from "styled-components";

export const ServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
`

export const ServicesCardContainer = styled.div`
    background-image: url(${(props) => props.mobile});
    background-size: cover;
    background-position: center;
    width: auto;
    text-align: center;
    padding: 398px 24px 59px 24px;
    margin-bottom: 64px;
`

export const ServicesTitle = styled.h3`
    color: ${(props) => props.titleColor};
    margin-bottom: 27px;

`

export const ServicesBody = styled.p`
    color: ${(props) => props.bodyColor};
    font-size: 1rem;
`