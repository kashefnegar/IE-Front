
import React, {Component} from 'react';
import Header from "src/view/container/header/header";
import Tifanibar from "src/view/container/header/tifanibar";
import {ButtonGroup, Col, DropdownButton, Row, Dropdown} from "react-bootstrap";
import Footer from "src/view/container/footer/footer";
import "./user_profile.scss";
// @ts-ignore
// import universal from "react-universal-component/dist/index.js";
import axios from "axios";
import {any} from "prop-types";


class UserProfile extends Component <Props,State>{
    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props);
        // @ts-ignore
        this.state={
            skills: [],
            image:'',
            firstname:'',
            other:true,
            jobtitle:'',
            bio:'',
            id:'',
            lastname:'',
            addedskill:[]
        }

    }
    componentDidMount(): void{
        // @ts-ignore
        const { userid } = this.props.match.params;
        axios.get("http://localhost:8080/user/"+userid)
            .then(response=>{
                this.setState({
                        skills:response.data.skills,
                        image:response.data.image,
                        firstname:response.data.firstname,
                        other:response.data.other,
                        jobtitle:response.data.jobtitle,
                        bio:response.data.bio,
                        id:response.data.id,
                        lastname:response.data.lastname
                    }
                )
            }, error=>{
                console.log('server errror')
            });
        axios.get("http://localhost:8080/addSkill")
            .then( response=>{
                this.setState(
                    {
                        addedskill:response.data.skills
                    }
                )
            },
                error=>{
                    console.log('server errror')
                }
        );

        // const imageSrc = ImageData[this.state.image]


    }
    dropbox(){
        return(
            <Col >
                <DropdownButton id="dropdown-item-button" title="--انتخاب مهارت --">
                    {this.state.addedskill.map((skill:skil)=>(
                        <Dropdown.Item as="button">{skill.name}</Dropdown.Item>
                    ))}
                </DropdownButton>;
            </Col>
        );
    }


    render() {
        // {console.log(`../../../template/photo/slideShow${this.state.image}`)}
        // let path = this.state.image;
        // @ts-ignore
        // path =path.slice(0, path.lastIndexOf('.'));
        // {console.log(path)}
        // {let hi = require(this.state.image)}
        {console.log(this.state.addedskill)}
        //
        return (
            <div>

                {Header.call(this)}
                {Tifanibar.call(this,false ,true)}
                <main>

                    {/*<div className="card-body card-body-cascade text-right wow fadeIn" data-wow-delay="0.2s">*/}

                    <Row className={"user_information"}>
                        <Col sm={3} className={"user_information"} >
                            {/*<Image source={IMAGES[this.state.image]} />*/}
                            <img src={ require( "../../../template/photo/slideShow/2.jpg")} alt={"girl"} />
                        </Col>
                        <Col  >
                            <Row className={"username_row"}>
                                <Col sm={2} className={"username"}>
                                    {this.state.firstname} {this.state.lastname}
                                </Col>
                            </Row>
                            <Row className={"user_information_row"} >
                                <Col sm={2} className={"user_information"}>
                                    {this.state.jobtitle}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"user_information"}>
                        <Col sm={1}/>
                        <Col className={"bio"}>
                            {this.state.bio}
                        </Col>
                        <Col sm={1}/>
                    </Row>
                    <Row className={"user_information"}>
                        <Col sm={1}/>
                        <Col sm={1} className={"username"}>
                            مهارت ها:
                        </Col>

                    </Row>

                    {this.dropbox()}

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
    skills: [],
    image:"",
    firstname:"",
    other:true,
    jobtitle:"",
    bio:"",
    id: "",
    lastname:"",
    addedskill:[]
    // data:info

}

//  info {
//     skills: [] = [];
//     image:string ='';
//     firstname:string='';
//     other!: boolean;
//     jobtitle!: string;
//     bio!: string;
//     id!: string;
//     lastname!: string;
//
//
// }

interface skil {
    name:string
    point:number
}
export default UserProfile;