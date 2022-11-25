import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} =useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(err => console.log(err))
  }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {
          user?.uid ?
          <> 
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><button onClick={handleLogOut}>Sign out</button></li> 
          </> 
          :
          <li><Link to='/login'>Login</Link></li>

        }
        
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
    <img src={logo} className="h-12 mr-3 rounded-3xl" alt="" />
      <h1>Phone Resale</h1>
      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;