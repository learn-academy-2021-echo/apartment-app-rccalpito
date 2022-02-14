import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './ApartmentEdit.css';

export default class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    let { street, state, price, manager, email, bedrooms, bathrooms, pets } = this.props.apartment
    this.state = {
      updateApartment: {
        street: street ? street : "",
        state: state ? state : "",
        price: price ? price : "",
        manager: manager ? manager : "",
        email: email ? email : "",
        bedrooms: bedrooms ? bedrooms : "",
        bathrooms: bathrooms ? bathrooms : "",
        pets: pets ? pets : "",
      },
      submitted: false
    };
  }


  handleChange = (e) => {
    const { updateApartment } = this.state;
    updateApartment[e.target.name] = e.target.value;

    this.setState({ updateApartment: updateApartment });
    console.log("handleChange", e.target.value)
    console.log(updateApartment)
  }

  handleSubmit = () => {
    const { updateApartment } = this.state;
    const filledOut = Object.values(updateApartment).every((value) => {
      return value;
    })
    this.props.updateApartment(updateApartment, this.props.apartment.id)
    this.setState({ submitted: true })
  }

  render() {
    const { submitted, updateApartment } = this.state
    const { apartment } = this.props;
    return (
      <section>
        <Form>
          <FormGroup>
            <Label>Street</Label>
            <Input
              type="textarea"
              name="street"
              placeholder={apartment.street}
              value={updateApartment.street}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              placeholder={apartment.state}
              onChange={this.handleChange}
              value={updateApartment.state}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input
              type="text"
              name="price"
              placeholder={apartment.price}
              onChange={this.handleChange}
              value={updateApartment.price}
            />
          </FormGroup>
          <FormGroup>
            <Label>Manager</Label>
            <Input
              type="text"
              name="manager"
              placeholder={apartment.manager}
              onChange={this.handleChange}
              value={updateApartment.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label>Manager Email</Label>
            <Input
              type="email"
              name="email"
              placeholder={apartment.email}
              onChange={this.handleChange}
              value={updateApartment.email}
            />
          </FormGroup>
          <FormGroup >
            <Label>Bedrooms</Label>
            <Input
              type="text"
              name="bedrooms"
              placeholder={apartment.bedrooms}
              onChange={this.handleChange}
              value={updateApartment.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label>Bathrooms</Label>
            <Input
              type="text"
              name="bathrooms"
              placeholder={apartment.bathrooms}
              onChange={this.handleChange}
              value={updateApartment.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pets</Label>
            <Input
              type="text"
              name="pets"
              placeholder={apartment.pets}
              onChange={this.handleChange}
              value={updateApartment.pets}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
        {submitted && <Redirect to={`/apartmentshow/${apartment.id}`} />}
      </section>
    );
  }
}
