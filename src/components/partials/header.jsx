import { Link } from "react-router-dom";
import CartIcon from "../app/cart/cartIcon";
import { HeaderStyle } from "./header.style";
import NavBarPrimary from "./navbarprimary";

const Header = () => {
    return (
        <HeaderStyle>
            <Link to ='/'>wallywood</Link>
            <CartIcon/>
            <NavBarPrimary/>
        </HeaderStyle>
    )
}

export default Header