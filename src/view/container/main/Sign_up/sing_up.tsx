import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import "./sign_up.scss"
class SingUp extends Component {

    render() {
        return (
            <div>
                <div className="login">
                    <div className="login-header">
                        <h1>ایجاد حساب کاربری</h1>
                    </div>
                    <div className="login-form">
                        <h4>نام</h4>
                        <input type="text" dir="rtl" placeholder="نگار"/>

                        <h4>نام خانوادگی</h4>
                        <input type="text" dir="rtl" placeholder="کاشف"/>

                        <h4>نام کاربری</h4>
                        <input type="text" placeholder="kashefnegar"/>

                        <h4>رمز عبور</h4>
                        <input type="password" placeholder="******"/>

                        <h4>تکرار رمز عبور</h4>
                        <input type="password" placeholder="******"/>

                        <h4>عنوان شغلی</h4>
                        <input type="text" dir="rtl" placeholder="توسعه دهنده نرم افزار"/>

                        <h4>لینک عکس پروفایل</h4>
                        <input type="text"/>

                        <h4>بیو</h4>
                        <input type="text" dir="rtl"/>

                        <input type="button" value="Login" className="login-button"/>
                    </div>
                </div>
                {/*<div className="login-header">*/}
                    {/*<h1>ایجاد حساب کاربری</h1>*/}
                {/*</div>*/}
                {/*<Form className={"sign_up"}>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*/!*<Form.Label className={"lable_pace"}>نام</Form.Label>*!/*/}
                            {/*<Form.Control placeholder="نام" />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="نام خانوادگی" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="نام کاربری" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="رمز عبو" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="تکرار رمز عبور" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="عنوان شغل" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="لینک عکس پروفایل" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Form.Row>*/}
                        {/*<Col>*/}
                            {/*<Form.Control placeholder="بیو" />*/}
                        {/*</Col>*/}
                    {/*</Form.Row>*/}
                    {/*<Button variant="primary" type="submit">*/}
                        {/*Submit*/}
                    {/*</Button>*/}

                {/*</Form>;*/}
            </div>
        );
    }
}

export default SingUp;