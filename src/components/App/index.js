import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Default from 'pages/Default'
import Signup from 'pages/Signup'
import MainLayout from 'Layouts/MainLayout'
import GuestLayout from 'Layouts/GuestLayout'
import {Provider} from 'react-redux'
import store from 'store'
import ProtectedRoute from 'router/ProtectedRoute'

function App() { 
  return (
    <div className="app" data-test="component-app">
      <Provider store={store}>
        <Router>        
            <Switch>
              <Route path={["/login", "/"]} exact>
                <GuestLayout>
                  <Switch>
                    <Route path="/" exact component={Default} />                      
                    <Route path="/login" component={Login} />	
                  </Switch> 
                </GuestLayout>
              </Route>  
              <Route path={["/home"]} exact>
                <MainLayout>
                  <Switch>                    
                    <ProtectedRoute 
                      path="/home"                       
                      component={Home} 
                    />
                  </Switch>
                </MainLayout>
              </Route>
            </Switch>                                           
        </Router>
      </Provider>      
    </div>
  );
}

export default App