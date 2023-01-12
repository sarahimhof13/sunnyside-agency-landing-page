import styled from "styled-components";
import { Device } from "../Devices";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: calc(100% - 48px);
    padding: 32px 24px;
`

export const Logo = styled.img`
    width: 123.64px;
    height: 24px;
`

export const HamburgerIcon = styled.div`
    width: 24px;
    height: 18px;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;

        div {
            width: 24px;
            height: 2px;
            background-color: var(--white);
            opacity: ${({ open }) => open ? '50%' : '100%'};
            transform-origin: 1px;
            transition: all 0.3s linear;
            &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }
            &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
            }
            &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }

        @media ${Device.tablet}{
            display: none;
        }
`;

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-bottom: 24px solid var(--light-cream);
    border-left: 24px solid transparent;
    position: absolute;
    top: -24px;
    right: 0;
    display: ${({ open }) => open ? 'block' : 'none'};
`

export const MenuStyle = styled.div`
    background: var(--light-cream);
    display: ${({ open }) => open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    width: calc(100% - 48px);
    position: absolute;
    padding: 40px 0;
    margin: 0 24px;
    top: 106px;
    left: 0;
    color: #333D4B;
    @media ${Device.tablet} {
        flex-direction: row;
        position: unset;
        padding: 0;
        display: flex;
    }
`;

export const MenuItem = styled(Link)`
    font-family: 'Barlow', serif;
    font-size: 1.25rem;
    line-height: 1.563rem;
    text-decoration: none;
    padding-bottom: 32px;
    color: var(--grey);
    @media ${Device.tablet}{
        display: flex;
        font-family: 'Barlow', sans-serif;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        letter-spacing: 0.92px;
        font-weight: 700;
        text-transform: uppercase;
        color: #83888F;
        text-decoration: none;
        margin-left: 32px;
        padding: 0;
    }
    &:hover {
        color: #333D4B;
        transition: 0.2s;
        cursor: pointer;
    }
`

export const MenuButton = styled(Link)`
    background-color: var(--yellow);
    text-decoration: none;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
    color: var(--dark-grey);
    padding: 16px 31px;
    border-radius: 28px;
`