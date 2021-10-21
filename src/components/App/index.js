import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Verify from 'pages/Verify'
import Default from 'pages/Default'
import Tweet from 'pages/Tweet/Tweet'
import {Provider} from 'react-redux'
import store from 'store/store'
import ProtectedRoute from 'router/ProtectedRoute'
import GuestRoute from 'router/GuestRoute'

function App() {

  return (
    <div className="app" data-test="component-app">      
      <Provider store={store}> 
        <Router>        
          <Switch>
            <GuestRoute path="/" exact component={Default} />                      
            <GuestRoute path="/login" exact component={Login} />
            <GuestRoute path="/verify-email/:hash" exact component={Verify} />           
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute path="/tweet/:id" exact component={Tweet} />             
          </Switch>                                           
        </Router> 
      </Provider>
    </div>
  )
}

export default App