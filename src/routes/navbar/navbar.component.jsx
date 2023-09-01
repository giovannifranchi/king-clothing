import Logo from '../../assets/crown.svg';
import { Outlet, Link } from 'react-router-dom';

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
                            <Link className='nav-link' to='shop'>
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='signup'>
                                SIGN UP
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='contacts'>
                                CONTACTS
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar;