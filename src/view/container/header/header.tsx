import React, {Component} from 'react';
import "./header.scss";
const Header = () =>(
    <header >
        <div className={'sticky'}>
        <div className={"header-right navbar-fixed-top navbar-default"}>
            <div className={'icons'}>
            <a className="active" href="/login" >حساب کاربری</a>
            <a className="active" href="/login" >خروج</a>
            </div>
            <a href="/"> <img alt="logo" src ={ require('../../template/photo/Logo/logov2.png')}/> </a>

        </div>
            </div>
    </header>
);


export default Header;