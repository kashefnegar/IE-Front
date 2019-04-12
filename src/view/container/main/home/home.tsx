import React, {Component} from 'react';
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";

var discription :string = 'این سایت بهترین کار را برای شما پیدا می کند'
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
                        <Row  className={"search_form"}>

                            <Form>
                                <Col >
                                <FormControl type="email" placeholder="جستجو در جاب اونجا" />
                                <Button variant="primary" type="submit">
                                    جستجو
                                </Button>
                                </Col>
                            </Form>

                            {/*<Col sm={4}>*/}
                                {/*hi*/}
                            {/*</Col>*/}
                        </Row>
                    </Container>
                    </div>
                    <p>
                        ￼

                    </p>

                </main>
                {Footer.call(this)}

            </div>
        );
    }
}

export default Home;