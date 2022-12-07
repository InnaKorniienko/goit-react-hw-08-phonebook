import { NavLink } from "react-router-dom";
import css from "../Navbar.module.css";
import items from "./Items";

const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

const NavbarMenu = () => {
    const elements = items.map(({id, to, text}) => (
        <li key={id}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={css.menu}>
           {elements}
        </ul>
    )
}

export default NavbarMenu;