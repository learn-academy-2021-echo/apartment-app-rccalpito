import React, { Component } from 'react'
import ApartmentIndex from './pages/ApartmentIndex'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentShow from './pages/ApartmentShow'
import mockApartments from './assets/mockApartments'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
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
          <Header {...this.props} />
          <Switch>
            <Route
              path="/apartmentindex"
              render={() => <ApartmentIndex apartments={this.state.apartments}></ApartmentIndex>}
            />
            <Route
              path="/apartmentshow/:id" render={(props) => {
                let id = +props.match.params.id
                let apartment = this.state.apartments.find((apartment) => apartment.id === id)
                return <ApartmentShow apartment={apartment} />
              }}
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App