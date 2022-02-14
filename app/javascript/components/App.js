import React, { Component } from 'react'
// import ApartmentIndex from './pages/ApartmentIndex'
// import Header from './components/Header'
// import Home from './pages/Home'
// import ApartmentEdit from './pages/ApartmentEdit'
// import ApartmentShow from './pages/ApartmentShow'
// import ApartmentNew from './pages/ApartmentNew'
import './App.css'
import './components/Header.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApartments()
  }





  readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((apartmentsArray) => this.setState({ apartments: apartmentsArray }))
      .catch((errors) => console.log("Apartments read errors:", errors));
  };

  createApartment = (newApartment) => {
    fetch("/apartments", {
      // converting an object to a string
      body: JSON.stringify(newApartments),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readApartments())
      .catch(errors => console.log("Apartment create errors:", errors))
  }

  updateApartment = (updateApartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(updateApartment),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => {
        console.log('Response: ', response)
        return response.json()
      })
      .then(() => this.readApartment())
      .catch((errors) => console.log("Apartment update errors:", errors));
    console.log(updateApartment)
  };



  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    const { apartments } = this.state

    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentindex"
            render={() => <ApartmentIndex apartments={this.state.apartments}></ApartmentIndex>}
          />
          <Route
            path="/apartmentshow/:id" render={(props) => {
              let id = +props.match.params.id
              let apartmentShow = apartments.find((apartment) => apartment.id === id)
              return <ApartmentShow apartment={apartmentShow} />
            }}
          />
          {/* <Route
            path="/apartmentnew"
            render={() => <ApartmentNew createApartment={this.createApartment} />}
          /> */}
          <Route
            path="/apartmentedit/:id" render={(props) => {
              let id = +props.match.params.id
              let apartmentEdit = apartments.find((apartment) => apartment.id === id)
              return <ApartmentEdit apartment={apartmentEdit} updateApartment={this.updateApartment} />
            }}
          />
        </Switch>
      </Router >
    )
  }
}

export default App