import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newApartment: {
        street: "",
        state: "",
        city: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "",
        user_id: this.props.current_user ? this.props.current_user.id : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { newApartment } = this.state
    newApartment[e.target.name] = e.target.value;

    this.setState({ newApartment: newApartment });
    console.log("handleChange", e.target.value)
    console.log(newApartment)
  }

  handleSubmit = () => {
    console.log(this.state.newApartment)
    this.props.createApartment(this.state.newApartment)
    this.setState({ submitted: true })
  }


  render() {
    // console.log("current_user", this.props.current_user)
    const { newApartment } = this.state

    return (
      <section>
        <Form>
          <FormGroup>
            <Label>Street</Label>
            <Input
              type="text"
              name="street"
              placeholder={"Street"}
              value={newApartment.street}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              placeholder={"City"}
              value={newApartment.city}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              placeholder={"State"}
              value={newApartment.state}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input
              type="text"
              name="price"
              placeholder={"Price"}
              value={newApartment.price}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Manager</Label>
            <Input
              type="text"
              name="manager"
              placeholder={"Manager"}
              value={newApartment.manager}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Manager Email</Label>
            <Input
              type="email"
              name="email"
              placeholder={"Email"}
              value={newApartment.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup >
            <Label>Bedrooms</Label>
            <Input
              type="text"
              name="bedrooms"
              placeholder={"Bedrooms"}
              value={newApartment.bedrooms}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Bathrooms</Label>
            <Input
              type="text"
              name="bathrooms"
              placeholder={"Bathrooms"}
              value={newApartment.bathrooms}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pets</Label>
            <Input
              type="text"
              name="pets"
              placeholder={"Pets"}
              value={newApartment.pets}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
        {/* {this.state.submitted && <Redirect to={`/apartmentindex`} />} */}
      </section>
    );
  }
}


