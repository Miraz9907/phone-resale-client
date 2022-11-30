import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Pages/Shared/Loading/Loading';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if(loading || isBuyerLoading){
        // return <progress className='progress w-56'></progress>
        return <Loading></Loading>
    }

    if(user && isBuyer){
        return children; 
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default BuyerRoute;