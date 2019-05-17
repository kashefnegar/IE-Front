import React, {Component} from 'react';
import axios from 'axios';
import {Button, Col, Form} from "react-bootstrap";
import "./sign_up.scss";
import { ToastContainer, toast } from 'react-toastify';

import {render} from "react-dom";
import Header from "src/view/container/header/header";
import Tifanibar from "src/view/container/header/tifanibar";
import Footer from "src/view/container/footer/footer";
const config = { headers: {'Content-Type': 'application/json'} };
class SingUp extends Component <props, state> {
    confirmedPassword: boolean;
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
        this.confirmedPassword = false;
    }

    notifyError = (msg:string) => { toast.error(msg); }


    handleFirstName (e): void {
        this.setState({name:e.target.value});
    }
    handleLastName (e): void {
        this.setState({lastname: e.target.value});
    }
    handleUserName (e): void {
        this.setState({username: e.target.value});
    }
    handlePassword (e): void {
        this.setState({password: e.target.value});
    }
    handleRePassword (e): void {
        this.setState({repassword: e.target.value});
        if (this.state.repassword !== '' && this.state.repassword !== this.state.password){
            this.notifyError("دو پسورد وارد شده با یکدیگر تطابق ندارند!");
        }
    }
    handleTitle (e): void {
        this.setState({title: e.target.value});
    }
    handleLink (e): void {
        this.setState({photolink: e.target.value});
    }
    handleBio (e): void {
        this.setState({bio: e.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        var user = {
            id : this.state.username,
            firstName: this.state.name,
            lastName: this.state.lastname,
            jobTitle: this.state.title,
            password:this.state.password,
            bio: this.state.bio,
            profilePictureURL: this.state.photolink

        };

        axios.post(`http://localhost:8080/signup`, { user } ,config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        var div = (
            <div>
                {Header.call(this)}
                {Tifanibar.call(this,true)}
                <main>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group >
                            <Form.Label>نام</Form.Label>
                            <Form.Control type="text"
                                          pattern={"[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]"}
                                          title="تنها حروف مجازند"
                                          name = {"name"} onChange={(event) => this.handleFirstName(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control type="text"
                                          pattern={"[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]"}
                                          title="تنها حروف مجازند"
                                          name={"lastname"} onChange={(event) => this.handleLastName(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>نام کاربری</Form.Label>
                            <Form.Control type="text"
                                          pattern={"[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-zA-Z]"}
                                          title="حروف,.,_"
                                          name={"username"} onChange={(event) => this.handleUserName(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control type="password" placeholder="******"
                                          pattern=".*[0-9]+.*" title="شامل حداقل یک عدد "
                                          name={"password"} onChange={(event) => this.handlePassword(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>تکرار رمز عبور</Form.Label>
                            <Form.Control type="password" placeholder="******"
                                          pattern=".*[0-9]+.*" title="شامل حداقل یک عدد "
                                          name={"repassword"}
                                onChange={(event) => this.handleRePassword(event)}
                            />

                        </Form.Group>


                        <Form.Group >
                            <Form.Label>عنوان شغلی</Form.Label>
                            <Form.Control type="text" dir="rtl" placeholder="توسعه دهنده نرم افزار"
                                          title="حروف,()"
                                          pattern="[A-Zپ-ژ-گ-چ-أ-يa-z-(-)].{3,}"
                                          name={"title"} onChange={(event) => this.handleTitle(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>لینک عکس پروفایل</Form.Label>
                            <Form.Control type="text" name={"photolink"} onChange={(event) => this.handleLink(event)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>بیو</Form.Label>
                            <Form.Control type="text" name={"bio"} dir="rtl" onChange={(event) => this.handleBio(event)}/>
                        </Form.Group>

                        <Form.Group>
                            <span dir="rtl"><a href="/login">  ورود</a></span>
                            <Button variant="primary" type="submit">
                                <a href="/">ثبت نام</a>
                            </Button>

                        </Form.Group>
                    </Form>

                </main>

                {Footer.call(this)}
            </div>);
        return div;
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

interface state {
    id:string
    name:string
    lastname:string
    username:string
    title:string
    photolink:string
    password:string
    bio:string
    repassword:string

}
interface props {}

export default SingUp;