import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const  [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">

    <li><Link to='/dashboard'>Booked Phone</Link></li>
        



      {
        isSeller && <>
        <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
      <li><Link to='/dashboard/myproduct'>My Products</Link></li>
      <li><Link to='/dashboard/allseller'>All Seller</Link></li>
        </>
      }

      {
        isAdmin && <>
      <li><Link to='/dashboard'>Booked Phone</Link></li>
        <li><Link to='/dashboard/allusers'>All User</Link></li>
      <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
      <li><Link to='/dashboard/myproduct'>My Products</Link></li>
      <li><Link to='/dashboard/allseller'>All Seller</Link></li>
      <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
        </>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;