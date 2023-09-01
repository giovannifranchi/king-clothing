import Logo from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="navbar py-3">
                <div className="container">
                    <div className='ms-logo'>
                        <a className="navbar-brand" href="#">
                            <img width={30} height={24} src={Logo} alt="crw-clothing logo" />
                        </a>
                    </div>
                    <ul className='ms-links list-unstyled d-flex gap-3 m-0'>
                        <li>
                            <a href='#'>Shop</a>
                        </li>
                        <li>
                            <a href='#'>Sing Up</a>
                        </li>
                        <li>
                            <a href='#'>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar;