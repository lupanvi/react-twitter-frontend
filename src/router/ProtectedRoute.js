import React from 'react'
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, path, ...rest }) => {          

    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)        
    
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;          
        }}
      />
    );
  }
  
export default ProtectedRoute