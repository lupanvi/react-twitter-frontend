import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isLoggedIn} from 'utils/storage'

const ProtectedRoute = ({component: Component, path, ...rest }) => {    
  
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
        }}
      />
    );
  }
  
export default ProtectedRoute