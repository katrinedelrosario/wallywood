import { NavLink } from "react-router-dom"
import {NavBarPrimaryStyle} from "../styled/navbarprimary.styled"


const NavBarPrimary = () => {
	return (
		<NavBarPrimaryStyle>
			<ul>
				<li><NavLink to="/">home</NavLink></li>
				<li><NavLink to="/posters">posters</NavLink></li>
				<li><NavLink to="/om_os">about us</NavLink></li>
				<li><NavLink to="/kontakt">contact</NavLink></li>
				<li><NavLink to="/login">login</NavLink></li>
			</ul>
		</NavBarPrimaryStyle>
	)
}

export default NavBarPrimary