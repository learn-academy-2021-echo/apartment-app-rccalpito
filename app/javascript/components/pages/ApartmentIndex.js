import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";
// import './ApartmentIndex.css'; 
// note to self, NavLink from react-router-dom is different from NavLink from bootstrap

export default class ApartmentIndex extends Component {
	render() {
		// 4 hours of work and research reduced to missing a variable declaration (const) feelsbad.jpeg
		const { apartments } = this.props
		return (
			<section>
				<h2> Checkout our apartments</h2>
				<br />
				<div className="Index">
					{apartments.map((apartment) => {
						return (
							<NavLink
								key={apartment.id}
								to={`/apartmentshow/${apartment.id}`}
							>
								<Card body>
									<CardTitle>San Diego CA</CardTitle>
									<CardText>{apartment.id}
										<br />{apartment.street}
										<br />{apartment.city} {apartment.state}
										<br />Property Manager:{apartment.manager} ({apartment.email})
										<br />Rent: {apartment.price}/mo
										<br />Bedrooms: {apartment.bedrooms} Bathrooms: {apartment.bathrooms}
										<br />Pets: {apartment.pets}</CardText>
								</Card>
							</NavLink>
						)
					})}
				</div>
			</section>
		)
	}
}
