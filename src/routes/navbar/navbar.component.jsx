import Logo from '../../assets/crown.svg';
import { Outlet, Link, NavLink } from 'react-router-dom';
import './navbar.style.scss';

const NavBar = () => {
    return (
        <>
            <div className="navbar py-3">
                <div className="container">
                    <div className='ms-logo'>
                        <Link className="navbar-brand" to='/'>
                            <img width={30} height={24} src={Logo} alt="crw-clothing logo" />
                        </Link>
                    </div>
                    <ul className='ms-links list-unstyled d-flex gap-3 m-0'>
                        <li>
                            <NavLink className='nav-link' to='shop'>
                                SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='signin'>
                                SIGN IN
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='contacts'>
                                CONTACTS
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar;