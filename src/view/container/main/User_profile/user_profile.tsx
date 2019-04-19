
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
// import {string} from "prop-types";
// import {any} from "prop-types";
// import {render} from "react-dom";
// import {log} from "util";


class UserProfile extends Component <Props,State>{
    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props);


        this.state={
            skills: [],
            image:'',
            firstname:'',
            other:true,
            jobtitle:'',
            bio:'',
            id:'',
            lastname:'',
            addedskill:[],
            // @ts-ignore
            btnTitle:any
        }

    }
    componentDidMount(): void{
        // @ts-ignore
        // const hi = "--انتخاب مهارت --";
        // const{hi} = "--انتخاب مهارت --";
        const { userid } = this.props.match.params;

        axios.all(
            [
                axios. get("http://localhost:8080/user/"+userid),
                axios.get("http://localhost:8080/addSkill")

            ]
        )
            .then(axios.spread ((response1,response2)=>{

                var hi = " --انتخاب مهارت-- ";
                this.setState({
                        skills:response1.data.skills,
                        image:response1.data.image,
                        firstname:response1.data.firstname,
                        other:response1.data.other,
                        jobtitle:response1.data.jobtitle,
                        bio:response1.data.bio,
                        id:response1.data.id,
                        lastname:response1.data.lastname,
                        addedskill:response2.data.skills,
                        btnTitle:hi
                    }
                )

            }))
        //     .catch(([googleErr, appleErr]){
        //         console.log("server side error")
        //
        // }


        // const imageSrc = ImageData[this.state.image]

    }

    dropbox(){
        return(
            <Col >
                <DropdownButton bsStyle="default" noCaret id="dropdown-item-button" title={this.state.btnTitle}>
                    {this.state.addedskill.map((skill:skil,index)=>(
                        <Dropdown.Item eventKey={skill.name} onChange={()=>

                            this.setState({btnTitle:skill.name})
                        }>{skill.name}</Dropdown.Item>
                    ))}
                </DropdownButton>;
            </Col>
        );
    }
    // skillchose(title_:skil){
    //     this.setState({btnTitle:title_.name});
    // }



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
                        {this.dropbox()}

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
    skills: [],
    image:"",
    firstname:"",
    other:true,
    jobtitle:"",
    bio:"",
    id: "",
    lastname:"",
    addedskill:[],
    btnTitle:any
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