import React, {Component} from 'react';
// import ReactJson from "react-json-view";
import girl from "../../../template/photo/icon/png/girl.png"
import mona from "../../../template/photo/slideShow/1.jpg"
import axios from 'axios'
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import Tifanibar from "src/view/container/header/tifanibar";
import "./projectPage.scss";
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

import Deadline from "../../../template/photo/icon/png/003-deadline.png";
import MoneyBage from "../../../template/photo/icon/png/004-money-bag.png";
import CheckMoney from "../../../template/photo/icon/png/001-check-mark.png";
import ProjectImg from "../../../template/photo/icon/png/girl.png";
import Danger from "../../../template/photo/icon/png/002-danger.png";
import DeadlineGray from "../../../template/photo/icon/png/005-deadline-gray.png";



class ProjectPage extends Component<Props,State>{

    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props, State);
        this.state= {
            data:[]
        };
    }

    componentDidMount(): void
    {
        axios.get('http://localhost:8080/project/')
            .then(response =>{

                // transformResponse: (r: ServerResponse) => r.data
                // console.log(response.data.Projects)
                this.setState({
                        data:response.data.Project
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
                <h4 className="red-text">
                    <div className={"Deadline"}>
                        <img  src = {Deadline} ></img>
                        <strong>مهلت تمام شده </strong>
                    </div>
                </h4>
            )
        }
    }

    winner(winner:string){
        return(
            <h4 className="winer">
                <div className = {"CheckMark"}>
                    <img src = {CheckMoney}></img>
                    <strong>
                        {winner}
                    </strong>

                </div>
            </h4>
        )
    }
    // @ts-ignore
    // projectInfo(){
    //     return(
    //     this.state.data.map( ( Project: ProjectT)) =>(
    //         <h2 className="card-title"><strong>{rojectT.title}</strong></h2>
    //             {this.cheaking(ProjectT.deadline)}
    //
    //         <h4 className="buget">
    //             <div className={"MoneyBage"}>
    //                 <img src = {MoneyBage}></img>
    //                 <strong>بودجه : {Project.budjet}</strong>
    //             </div>
    //         </h4>
    //             if({Project.deadline} = 0 )
    //                 {this.winner(Project.winner)}
    //
    //     <h3><strong> توضیحات</strong></h3>
    //
    //     <h4 className="ditail">
    //         &nbsp; &nbsp;{Project.Info}
    //     </h4>
    //     )
    //     )
    // }
    projectImg(){
        return(
            <div className={"ProjectImg"}>
                <img src = {ProjectImg}></img>
            </div>
        )
    }
    // projectNeeds(){
    //     return(
    //         this.state.data.map( (Skill:  skil))=>(
    //
    //         )
    //     )
    // }
    render() {
        return (
         <div>
        {Header.call(this)}
        {Tifanibar.call(this, false , false)}

             <div className={"card-body card-body-cascade text-right wow fadeIn"}>
                 <div className="row">
                     <div className="col-sm-9">
                         <h2 className="card-title"><strong>پروژه طراحی سایت جاب اونجا</strong></h2>
                             {/*in project-deadline-reached*/}
                             {/*<h4 className={"red-text"}>*/}
                                 {/*<div className={"Deadline"}>*/}
                                     {/*<img  src = {Deadline} ></img>*/}
                                     {/*<strong>مهلت تمام شده </strong>*/}
                                 {/*</div>*/}
                             {/*</h4>*/}
                             {/**/}

                            <h4 className="gray-text">
                                <div className={"Deadline"}>
                                    <img  src = {DeadlineGray} ></img>
                                    <strong>زمان باقی مانده : 17 دقیقه و 25 ثانیه </strong>
                                </div>
                            </h4>

                             <h4 className="buget">
                                     <div className={"MoneyBage"}>
                                         <img src = {MoneyBage}></img>
                                         <strong>بودجه : ۲۵۰۰ تومان</strong>
                                     </div>

                                 </h4>
                                     {/*use project_deadline_reached */}
                                     {/*<h4 className="winer">*/}
                                         {/*<div className = {"CheckMark"}>*/}
                                             {/*<img src = {CheckMoney}></img>*/}
                                             {/*<strong>*/}
                                                 {/*وحید محمدی*/}
                                             {/*</strong>*/}

                                         {/*</div>*/}
                                     {/*</h4>*/}
                                     {/**/}
                                     <h3><strong> توضیحات</strong></h3>

                                     <h4 className="ditail">
                                         &nbsp; &nbsp; لورم الپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                         گرافیک است. چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است . لورم ایپسوم
                                         متن ساختگی با تولید سادگی نا مفهوم از صنعت جاپ و با استقاده از طراحان گرافیک است . چاپگرها و
                                         متون بلکه روزنامه و محله در ستون و سطر آنچنان که لازم است.
                                     </h4>
                     </div>

                     <div className={"col-sm-2"}>
                             <div className={"ProjectImg"}>
                                 <img src = {ProjectImg}></img>
                             </div>
                     </div>



                     <div className={"row2"}>
                         <h3 className="skills"><strong> مهارت های لازم: </strong></h3>
                         <div className={"columns"}>
                             <div className={"col-sm-3"}>
                                 <div className="skills_">
                                     <p> HTML</p>
                                     <div className="points"> 5</div>
                                 </div>
                             </div>

                             <div className={"col-sm-3"}>
                                 <div className="skills_">
                                     <p> CSS</p>
                                     <div className="points"> 3</div>
                                 </div>
                             </div>
                             <div className={"col-sm-3"}>
                                 <div className="skills_">
                                     <p> JavaScript</p>
                                     <div className="points"> 16</div>
                                 </div>
                             </div>

                             <div className={"col-sm-3"}>
                                 <div className="skills_">
                                     <p> TypeScript</p>
                                     <div className="points"> 2</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row row_">
                     <div className="col">
                         {/*project deadline reached*/}
                         {/*<h4 className="warning">*/}
                            {/**/}
                             {/*<div className={"Danger"}>*/}
                                 {/*<img src = {Danger}></img>*/}

                                 {/*<strong>*/}
                                     {/*مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است !*/}
                                 {/*</strong>*/}

                             {/*</div>*/}
                         {/*porject already bid*/}
                         {/*<h4 className="warning">*/}

                            {/*<div className={"Tick"}>*/}
                            {/*<img src = {CheckMoney}></img>*/}

                         {/*<strong>*/}
                             {/*شما قبلا پیشنهاد خود را ثبت کرده اید*/}
                         {/*</strong>*/}

                         {/*</div>*/}
                         {/*</h4>*/}
                         {/**/}
                         <h4 className={"add-offer"}>
                             <p>ثبت پیشنهاد</p>
                             <div className={"offer"}>

                                 <input id={"Tom"} placeholder={"پیشنهاد خود را وارد کنید"}/>
                                 <label htmlFor={"Tom"} className={"toman"}>تومان</label>
                                 <button className="send">ارسال</button>
                             </div>
                         </h4>

                     </div>

                 </div>
             </div>
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

interface ProjectT {
    needskil:[]
    userREQ:[]
    description:string
    id:string
    title:string
    deadline:number
    budget:number
    winner:string
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

export default ProjectPage;