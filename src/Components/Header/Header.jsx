import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserProvider } from '../AuthProvider';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(UserProvider)
  const navigate = useNavigate();

  const userLogoutHandler = async () => {
  const data = await logout();
    if (data) {
        navigate('/');
    }
};

  return (
    <div className='d-flex  justify-content-around align-items-center p-3 header' >
        <div className='d-flex align-items-center' >
          <span><Link to='/' ><img height={40} src="/letter-s.png" alt="logo"/></Link> </span><span className='icon'>ShopHere</span>
        </div>
        <ul className='d-flex' >
            <li className='list-unstyled ms-3' ><Link className='text-decoration-none  nav-link' to='/' >HOME</Link></li>
            <li className='list-unstyled ms-4'>{isAuthenticated ?<Link className='text-decoration-none  nav-link' onClick={userLogoutHandler}>SIGN OUT</Link> :<Link className='text-decoration-none nav-link' to='/login'>SIGN IN</Link>}</li>
            <li className='list-unstyled ms-3' ><Link className='text-decoration-none  nav-link ms-1' to='/cart' >CART</Link></li>
        </ul>
    </div>
  )
}
export default Header;