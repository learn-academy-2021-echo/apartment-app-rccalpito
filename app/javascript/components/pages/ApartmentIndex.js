import React, { Component } from 'react'
import { NavLink, Card, CardTitle } from 'reactstrap';

export default class ApartmentIndex extends Component {
    render() {
        // 4 hours of work and research reduced to missing a variable declaration (const) feelsbad.jpeg
        const { apartments } = this.props
        return (
            <section>
                <h1> Checkout our apartments</h1>
                <br />
                <div className="Index">
                    {apartments.map((apartment) => {
                        return (
                            <NavLink
                                key={apartment.id}
                                apartment={apartment}
                                href={`/apartmentshow/${apartment.id}`}
                            >
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
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        )
    }
}
