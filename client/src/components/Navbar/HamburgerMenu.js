import { useState } from "react"
import { HamburgerIcon } from "./Navbar.style";
import MobileMenu from "./Menu";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <HamburgerIcon open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </HamburgerIcon>
            <MobileMenu open={open}/>
        </>
    )
};

export default HamburgerMenu;