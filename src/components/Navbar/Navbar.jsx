import { Link } from 'react-router-dom';
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'components/shared/Hooks/UseAuth';
import css from "./Navbar.module.css";

const Navbar = () => {
    const isLogin = useAuth();
    return (
        <nav className={css.navbar}>
            <div className={css.container}>
                <div className={css.row}>
                    <Link to="/">Logo</Link>
                    {isLogin && <NavbarMenu />}
                    {isLogin ? <NavbarUser /> : <NavbarAuth />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;