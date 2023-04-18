import React, { useContext } from 'react';
import { AuthContextProvider } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loding} = useContext(AuthContextProvider);
    const location = useLocation();
    console.log(location);

    if(loding){
        return <div>Loding....</div>
    }
    //state={{ from: location }} replace 
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;