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
<<<<<<< HEAD
        </div>

        {/*<div className="tifani bar">*/}
        {/*</div>*/}
=======
            </div>
        </div>
>>>>>>> 13fdae10f8e2bfa7d2446f4a5489ad41b98fab99
    </header>
);


export default Header;