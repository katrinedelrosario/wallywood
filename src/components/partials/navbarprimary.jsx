import { NavLink } from "react-router-dom";
import NavBarPrimaryStyle from "../styled/navbarprimary.styled";

const NavBarPrimary = () => {
    return (
        <NavBarPrimaryStyle>
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/plakater">plakater</NavLink></li>
                <li><NavLink to="/om_os">om os</NavLink></li>
                <li><NavLink to="/kontakt">kontakt</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
            </ul>
        </NavBarPrimaryStyle>
    )
}

export default NavBarPrimary