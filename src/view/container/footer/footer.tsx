import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import "./footer.scss"
const  Footer = () =>(
    <footer>
        <Navbar bg="dark">
            <Navbar.Brand>
                <p  className="text-center mt-4 mb-4">
                تمامی حقوق متعلق به جاب اونجا می باشد©
                </p>
            </Navbar.Brand>
        </Navbar>
    </footer>
);

export default Footer;