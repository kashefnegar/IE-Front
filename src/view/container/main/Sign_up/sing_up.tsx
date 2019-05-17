import React, {Component} from 'react';
import axios from 'axios';
import {Button, Col, Form} from "react-bootstrap";
import "./sign_up.scss"
import {render} from "react-dom";
const config = { headers: {'Content-Type': 'application/json'} };
class SingUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            lastname: '',
            username:'',
            password:'',
            repassword:'',
            title:'',
            bio:'',
            photolink:''
        }
    }

    handleFirstName (e): void {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    handleLastName (e): void {
        const lastname = e.target.name;
        const value = e.target.value;
        this.setState({[lastname]: value});
    }
    handleUserName (e): void {
        const username = e.target.name;
        const value = e.target.value;
        this.setState({[username]: value});
    }
    handlePassword (e): void {
        const password = e.target.name;
        const value = e.target.value;
        this.setState({[password]: value});
    }
    handleRePassword (e): void {
        const repassword = e.target.name;
        const value = e.target.value;
        this.setState({[repassword]: value});
    }
    handleTitle (e): void {
        const title = e.target.name;
        const value = e.target.value;
        this.setState({[title]: value});
    }
    handleLink (e): void {
        const photolink = e.target.name;
        const value = e.target.value;
        this.setState({[photolink]: value});
    }
    handleBio (e): void {
        const bio = e.target.name;
        const value = e.target.value;
        this.setState({[bio]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        // var user = {
        //     id : this.state.username,
        //     firstName: this.state.name,
        //     lastName: this.state.lastname,
        //     jobTitle: this.state.title,
        //     password:this.state.password,
        //     bio: this.state.bio,
        //     profilePictureURL: this.state.photolink
        //
        // };

        // axios.post(`http://localhost:8080/register`, { user } ,config)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <div className="login">
                    <div className="login-header">
                        <h1>ایجاد حساب کاربری</h1>
                    </div>
                    <div className="login-form">
                        <h4>نام</h4>
                        <input type="text" dir="rtl" placeholder="نگار" name={"name"} onChange={(event) => this.handleFirstName(event)}/>

                        <h4>نام خانوادگی</h4>
                        <input type="text" dir="rtl" placeholder="کاشف" name={"lastname"} onChange={(event) => this.handleLastName(event)}/>

                        <h4>نام کاربری</h4>
                        <input type="text" placeholder="kashefnegar" name={"username"} onChange={(event) => this.handleUserName(event)}/>

                        <h4>رمز عبور</h4>
                        <input type="password" placeholder="******" name={"password"} onChange={(event) => this.handlePassword(event)}/>

                        <h4>تکرار رمز عبور</h4>
                        <input type="password" placeholder="******" name={"repassword"}
                               // onTransitionEnd={(event)=>{
                            // if(!this.state.repassword.match(this.state.password)){

                            // }
                      //  {/*}}*/}
                               onChange={(event) => this.handleRePassword(event)}
                        />

                        <h4>عنوان شغلی</h4>
                        <input type="text" dir="rtl" placeholder="توسعه دهنده نرم افزار" name={"title"} onChange={(event) => this.handleTitle(event)}/>

                        <h4>لینک عکس پروفایل</h4>
                        <input type="text" name={"photolink"} onChange={(event) => this.handleLink(event)}/>

                        <h4>بیو</h4>
                        <input type="text" name={"bio"} dir="rtl" onChange={(event) => this.handleBio(event)}/>

                        <input type="button" value="Login" className="login-button"/>
                    </div>
                </div>

            </div>
            </form>
        );
    }
}
interface user {
    id:string
    firstName:string
    lastName:string
    jobTitle:string
    profilePictureURL:string
    password:string
    bio:string
}
export default SingUp;