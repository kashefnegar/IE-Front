import React, {Component} from 'react';
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import "./tifanibar.scss";
var discription :string = 'این سایت بهترین کار را برای شما پیدا می کند';
const Tifanibar = (search:boolean=true ,trapezius:boolean=false) =>(
    <div className={"tifani bar"}>
        {type_tifanibar(search,trapezius)}
    </div>

);
function type_tifanibar(search:boolean=true ,trapezius:boolean=false){
    if (search)
    {
        return(
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
        );
    }
    else{
        if (trapezius){
            return(
                <Container>
                    <Row className={"terapazius_row"}>
                    </Row>
                    <Row>
                        <Col sm={3} className={"trapezius_1"}>
                            <div className={"trapezius"}>
                            </div>
                        </Col>
                        {/*<Col sm={3}/>*/}

                    </Row>
                </Container>


            );

        }
        else {
            return(
                <div>

                </div>
            );
        }
    }

}


export default Tifanibar ;