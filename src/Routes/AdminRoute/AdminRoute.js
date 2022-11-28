import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    // const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        // return <progress className='progress w-56'></progress>
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children; 
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;