import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = ({component: Component, path, ...rest }) => {

    const isLoggedIn = useSelector(state=>state.auth.isAuthenticated)  
  
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