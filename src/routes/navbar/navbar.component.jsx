import Logo from '../../assets/crown.svg';
import CartIcon from '../../components/cartIcon/cartIcon.component';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/users.context';
import { signOutAuth } from '../../utils/firebase/firebase.utils';
import './navbar.style.scss';

const NavBar = () => {

    const { currentUser } = useContext(UserContext);

    const handleSignOut = ()=> signOutAuth();

    return (
        <>
            <div className="navbar py-3">
                <div className="container">
                    <div className='ms-logo'>
                        <Link className="navbar-brand" to='/'>
                            <img width={70} height={45} src={Logo} alt="crw-clothing logo" />
                        </Link>
                    </div>
                    <ul className='ms-links list-unstyled d-flex gap-3 m-0 align-items-center'>
                        <li>
                            <NavLink className='nav-link' to='shop'>
                                SHOP
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink className='nav-link' to='contacts'>
                                CONTACTS
                            </NavLink>
                        </li> */}
                        <li>
                            {
                                !currentUser ?
                                    (
                                        <NavLink className='nav-link' to='signin'>
                                            SIGN IN
                                        </NavLink>
                                    )
                                    :
                                    (
                                        <span onClick={handleSignOut} className='nav-link cursor-pointer'>SIGN OUT</span>
                                    )
                            }
                        </li>
                        <li>
                            <CartIcon/>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar;