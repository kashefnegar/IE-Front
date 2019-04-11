import React, {Component} from 'react';
import "./header.scss";
const Header = () =>(
    <header >
        <nav>
        <div className="header-right navbar-fixed-top navbar-default">
            <a className="active" href="#account">حساب کاربری</a>
            <a className="active" href="#exit">خروج</a>
            <a href="#logo"> <img alt="logo" src ={ require('../../template/photo/Logo/logov2.png')}/> </a>
        </div>
        </nav>
        <div className="tifani bar">
        </div>
    </header>
);
// class Header extends Component {
//     render() {
//         return (
//
//         );
//     }
// }

export default Header;