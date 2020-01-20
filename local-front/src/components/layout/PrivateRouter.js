import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';

import {AuthContext} from '../../context/AuthProvider'

const PrivateRoute = ({component: Component, ...rest}) => {
    const { auth } = useContext(AuthContext);

    return(
        <Route 
        {...rest}
        render={props => {
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if(!auth.isAuthenticated) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props}/>
            }
        }}
        />
    )
}

export default PrivateRoute;