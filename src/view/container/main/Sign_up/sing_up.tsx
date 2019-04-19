import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import "./sign_up.scss"
class SingUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
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
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div>
                <div className="login">
                    <div className="login-header">
                        <h1>ایجاد حساب کاربری</h1>
                    </div>
                    <div className="login-form">
                        <h4>نام</h4>
                        <input type="text" dir="rtl" placeholder="نگار" name={"name"} onChange={(event) => this.handleUserInput(event)}/>

                        <h4>نام خانوادگی</h4>
                        <input type="text" dir="rtl" placeholder="کاشف" name={"lastname"}/>

                        <h4>نام کاربری</h4>
                        <input type="text" placeholder="kashefnegar" name={"username"}/>

                        <h4>رمز عبور</h4>
                        <input type="password" placeholder="******" name={"password"}/>

                        <h4>تکرار رمز عبور</h4>
                        <input type="password" placeholder="******" name={"repassword"}
                               // onTransitionEnd={(event)=>{
                            // if(!this.state.repassword.match(this.state.password)){

                            // }
                      //  {/*}}*/}
                        />

                        <h4>عنوان شغلی</h4>
                        <input type="text" dir="rtl" placeholder="توسعه دهنده نرم افزار" name={"title"}/>

                        <h4>لینک عکس پروفایل</h4>
                        <input type="text" name={"photolink"}/>

                        <h4>بیو</h4>
                        <input type="text" name={"bio"} dir="rtl"/>

                        <input type="button" value="Login" className="login-button"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default SingUp;