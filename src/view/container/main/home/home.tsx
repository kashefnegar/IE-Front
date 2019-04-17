import React, {Component} from 'react';
// import ReactJson from "react-json-view";
import girl from "../../../template/photo/icon/png/girl.png"
import mona from "../../../template/photo/slideShow/1.jpg"
import axios from 'axios'
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup, ListGroup,
    Row,
    ToggleButton
} from "react-bootstrap";


import Tifanibar from "src/view/container/header/tifanibar";


var users = {
    "users":[
        {
            "name":"mona",
            "jobtitle":"programer",
            "img":mona
        },
        {
            "name":"life",
            "jobtitle":"smile",
            "img":mona
        },
        {
            "name":"hi",
            "jobtitle":"dont work",
            "img":mona
        }
    ]
}
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
    cheaking(deadline:number){
        // deadline=0;
        if(deadline>0){
            return( <div className={"time_remain"}>
                {" زمان باقی مانده: "}  {deadline%10000}
            </div>);
        }
        else {
            return(
                <div className={"enddeadline"}>
                    {"مهلت تمام شده"}

                </div>
            )
        }
    }
    project_list(){
        return(
            this.state.data.map( (  Projects: Projects) =>(

                <div className={"card-body card-body-cascade text-right wow fadeIn"}>
                    <Row key={Projects.id}>
                    <Col sm={9}>
                        <Row>
                            <div className={"firstline"}>
                                <Col >
                                    <div className={"title_home"}>
                                        {Projects.title }
                                    </div>
                                </Col>
                                <Col sm={3}>

                                    {this.cheaking(Projects.deadline)}
                                    {/*<div className={"time_remain"}>*/}
                                        {/*{" زمان باقی مانده: "}  {Projects.deadline%10000}*/}
                                    {/*</div>*/}
                                </Col>
                            </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"discription"}>
                                {Projects.description}
                            </div>
                            <div className={"budget"}>
                                بوجه: {Projects.budget} تومان
                            </div>
                            <div className={"skills"}>
                                <div className={"skill_title"}>
                                    مهارت ها:
                                </div>

                                {Projects.needskil.map((skill:skil)=>(
                                    <div className={"skill"}>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                            <br/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img src={girl} />
                </Col>
            </Row>
                </div>

        ))

        )
    }

    search_user(){
        return(
            <div className={"card-body card-body-cascade text-right wow fadeIn"}>
                <Row>
                    <Col>
                        <InputGroup className={"search_user"}>
                            <FormControl
                                placeholder="جستجو نام کاربر"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
    online_users(){

        return(
            <div className={"online_user"}>
                {this.search_user()}
                {users.users.map((user)=>(
                    <div className={"card-body card-body-cascade text-right wow fadeIn"}>
                        <Row>
                            <Col>
                                <img src={user.img}/>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        { user.name}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={"titlejob"}>
                                        {user.jobtitle}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>
                ))}

            </div>

        );

    }
    render() {
        return (

            <div>
                {Header.call(this)}
                {Tifanibar.call(this)}
                <main>
                    <Row>
                        <Col sm={1}/>
                        <Col>
                            {this.project_list()}
                        </Col>
                        <Col sm={3}>
                            {this.online_users()}
                        </Col>
                    </Row>


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

interface users {
    name:string
    jobtitle:string
    img:string

}

    export default Home;