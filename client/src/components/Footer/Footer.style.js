import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--turquoise);
    text-align: center;
    padding: 64px 39px 80px 39px;
`

export const Logo = styled.img`
    fill: var(--dark-green);
    margin-bottom: 40px;
    width: 170px;
    height: 33px;
`

export const FooterMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 88px;
`

export const FooterItem = styled(Link) `
    text-decoration: none;
    color: var(--medium-green);
    font-size: 1.125rem;
`

export const SocialsContainer = styled.div`
    display: flex;
    gap: 28px;
    justify-content: center;
`

export const SocialsIcon = styled.img`

`