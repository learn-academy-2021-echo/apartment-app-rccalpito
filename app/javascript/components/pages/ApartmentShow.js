import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
// import apartments from '../assets/mockApartments'

export default class ApartmentShow extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { apartment } = this.props;
        return (
            <section>
                <h1> Checkout our apartments</h1>
                <br />
                <div className="card">
                    <div className="card-text">
                        <p>{apartment.id}</p>
                        <p>{apartment.street}</p>
                        <p>{apartment.city} {apartment.state}</p>
                        <p>{apartment.manager} {apartment.email}</p>
                        <p>Monthly Price: {apartment.price}</p>
                        <p>Bedrooms: {apartment.bedrooms} Bathrooms: {apartment.bathrooms}</p>
                        <p>{apartment.pets}</p>
                    </div>
                </div>
            </section>
        )
    }
}
