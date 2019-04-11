import React, {Component} from 'react';
import "./header.scss";
const Header = () =>(
    <header >
        <div className={'sticky'}>
        <div className={"header-right navbar-fixed-top navbar-default"}>
            <div className={'icons'}>
            <a className="active" href="#account" >حساب کاربری</a>
            <a className="active" href="#exit">خروج</a>
            </div>
            <a href="#logo"> <img alt="logo" src ={ require('../../template/photo/Logo/logov2.png')}/> </a>

        </div>

        {/*<div className="tifani bar">*/}
        {/*</div>*/}

            </div>

    </header>
);


export default Header;