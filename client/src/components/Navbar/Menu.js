import { Triangle, MenuItem, MenuStyle, MenuButton } from "./Navbar.style";

const MobileMenu = ({ open }) => {
    return (
        <MenuStyle open={open}>
            <Triangle open={open} />
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuButton>Contact</MenuButton>
        </MenuStyle>
    )
}

export default MobileMenu;