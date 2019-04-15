import React, {Component} from 'react';
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
import {Button, ButtonGroup, Col, Container, Form, FormControl, InputGroup, Row, ToggleButton} from "react-bootstrap";

var discription :string = 'این سایت بهترین کار را برای شما پیدا می کند';
const data =[{"name":"test1"},{"name":"test2"}];
const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
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
                    </Container>
                    </div>
                    <div className={"project_information"}>

                    </div>




                </main>

                {Footer.call(this)}

            </div>
        );
    }
}

export default Home;