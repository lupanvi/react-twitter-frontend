import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Default from 'pages/Default'
import MainLayout from 'Layouts/MainLayout'
import GuestLayout from 'Layouts/GuestLayout'
import {Provider} from 'react-redux'
import store from 'store'
import ProtectedRoute from 'router/ProtectedRoute'
import GuestRoute from 'router/GuestRoute'

function App() {

  return (
    <div className="app" data-test="component-app">      
      <Provider store={store}> 
        <Router>        
          <Switch>
            <Route path={["/", "/login"]} exact>
              <GuestLayout>
                <Switch>
                  <GuestRoute path="/" exact component={Default} />                      
                  <GuestRoute path="/login" exact component={Login} />	
                </Switch> 
              </GuestLayout>
            </Route>  
            <Route path={["/home"]} exact>
              <MainLayout>
                <Switch>                    
                  <ProtectedRoute                     
                    path="/home" 
                    exact                       
                    component={Home} 
                  />
                </Switch>
              </MainLayout>
            </Route>
          </Switch>                                           
        </Router> 
      </Provider>
    </div>
  )
}

export default App