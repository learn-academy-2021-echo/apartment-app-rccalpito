import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ApartmentEdit extends Component {
    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="bedrooms" className="mr-sm-2">Bedrooms</Label>
                        <Input type="textarea" name="text" id="bedroom-text" placeholder="2 beds" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="bathrooms" className="mr-sm-2">Password</Label>
                        <Input type="textarea" name="text" id="bathroom-text" placeholder="2 baths" />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Text Area3</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Option one is this and that—be sure to include why it's great
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Option two can be something else and selecting it will deselect option one
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="radio2" disabled />{' '}
                                    Option three is disabled
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="checkbox2" sm={2}>Checkbox</Label>
                        <Col sm={{ size: 10 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}
