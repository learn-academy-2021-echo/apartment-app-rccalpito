import React, { Component } from 'react'
import ApartmentIndex from './components/ApartmentIndex'
import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <Router>
          <Header />
          <Switch>

            <h1>This is App.js</h1>
            <Route
              path="/apartmentindex"
              render={() => <ApartmentIndex apartments={...props} />}
            />
            <Home />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App