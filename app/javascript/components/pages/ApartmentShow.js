import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { Redirect } from "react-router-dom";

export default class ApartmentShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
        }
    }

    handleBack = () => {
        this.setState({ submitted: true })
        console.log("stop touching me")
    }

    render() {
        const { submitted } = this.state
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
                    <div>
                        <Button color="primary" onClick={this.handleBack}>Edit Apartment
                        </Button>
                    </div>
                </div>
                {submitted && <Redirect to={`/apartmentedit/${apartment.id}`} />}
            </section>
        )
    }
}
