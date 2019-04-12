import React, {Component} from 'react';
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
import {Button, ButtonGroup, Col, Container, Form, FormControl, InputGroup, Row, ToggleButton} from "react-bootstrap";

var discription :string = 'این سایت بهترین کار را برای شما پیدا می کند';
class Home extends Component {
    render() {
        return (

            <div>
                {Header.call(this)}
                <main>
                    <div className={"tifani bar"}>
                    <Container>
                        <Row>
                            {/*<Col>*/}
                            <h3 > جاب اونجا خوب است! </h3>
                            {/*</Col>*/}

                        </Row>
                        <Row>
                            {/*<Col>*/}
                            <p>{discription}</p>
                            {/*</Col>*/}
                        </Row>

                        <Col sm={10}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="جستجو در جاب اونجا"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />

                                <InputGroup.Append>
                                    <Button variant="outline-secondary">جستجو </Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </Col>
                        {/*<Row  >*/}

                            {/*<Form >*/}
                                {/*<Form inline>*/}
                                {/*<Col  sm={10} >*/}
                                {/*/!*<div className={"shadow_box"}>*!/*/}

                                {/*<FormControl type="email" placeholder="جستجو در جاب اونجا" />*/}
                                    {/*<Button variant="primary" type="submit">*/}
                                        {/*جستجو*/}
                                    {/*</Button>*/}
                                {/*</Col>*/}
                                {/*<Col>*/}

                                {/*</Col>*/}

                                {/*<Button variant="primary" type="submit">*/}
                                    {/*جستجو*/}
                                {/*</Button>*/}

                                {/*</div>*/}

                            {/*</Form>*/}
                             {/*</Form>*/}

                            {/*<Col sm={4}>*/}
                                {/*hi*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                    </Container>


                    </div>


                    <p>
                        ￼
                        Introduction
                        Learn how to include React Bootstrap in your project


                        JavaScript#
                        React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed you have everything you need.

                        Installation#
                        The best way to consume React Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).

                        If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.

                        npm install react-bootstrap bootstrap
                        Importing#
                        You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.

                        import Button from 'react-bootstrap/Button';

                    </p>


                </main>

                {Footer.call(this)}

            </div>
        );
    }
}

export default Home;