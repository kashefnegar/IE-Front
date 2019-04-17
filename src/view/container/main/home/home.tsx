import React, {Component} from 'react';
// import ReactJson from "react-json-view";
import axios from 'axios'
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
import {Button, ButtonGroup, Col, Container, Form, FormControl, InputGroup, Row, ToggleButton} from "react-bootstrap";
import {any, object} from "prop-types";
import * as ts from "typescript/lib/tsserverlibrary";
// import Project = ts.server.Project;
// import {ServerResponse} from "http";
// var json : any;
var discription :string = 'این سایت بهترین کار را برای شما پیدا می کند';
// const data =[{"name":"test1"},{"name":"test2"}];
// const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
class Home extends Component<Props,State>{
    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props, State);
        this.state= {
            data:[]
        };
        // this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(): void
     {
        axios.get('http://localhost:8080/projects')
            .then(response =>{

                // transformResponse: (r: ServerResponse) => r.data
                // console.log(response.data.Projects)
                this.setState({
                data:response.data.Projects
                }
            )
            },error=>{
                console.log('server errorrrr')
            });
    }
            // .then(response => {
            //     this.setState(
            //         {
            //             data:response.data})
            // }
            //     // const data = resp.data.data.children.map(obj => obj.data);
            //     // this.setState({data:response.data})
            // }

    render() {
        // console.log("responseeeee");
        console.log(this.state.data);
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
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

                    <p>

                        {this.state.data.map( (  Projects: Projects) =>(


                            <li key={Projects.id}>
                                    {
                                        Projects.title
                                    }
                                    {
                                        Projects.description
                                    }
                                    {Projects.budget}
                                    {Projects.needskil.map((skill:skil)=>(
                                        skill.name
                                    ))}
                                </li>
                            ))
                        }







                    </p>

                </main>

                {Footer.call(this)}

            </div>
        );
    }
}

interface Props {
    // yourname : string;

}
interface State {
    data: []

}
interface ServerResponse {
    // data: Projects
}

interface Projects {
    needskil:[]
    userREQ:[]
    description:string
    id:string
    title:string
    deadline:number
    budget:number


}
interface skil {
    name:string
    point:number
}

    export default Home;