import Button from "react-bootstrap/Button";

import { FormCheck, FormControl, FormGroup, FormLabel, FormText} from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import React, {Component} from 'react';

class Form_ extends Component {
    render() {
        return (
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" />
                    <FormText className="text-muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup controlId="formBasicChecbox">
                    <FormCheck type="checkbox" label="Check me out" />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Form_;
// const Form_ = () =>(
//
// );

// export default Form_;