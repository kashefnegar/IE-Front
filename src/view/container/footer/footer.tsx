import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import "./footer.scss"
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
const  Footer = () =>(
    <footer>
        {/*<Navbar bg="dark" variant="dark">*/}
        {/*/!*<Nav className="text-center mt-4 mb-4">*!/*/}

        {/*</Navbar>*/}
        <Navbar bg="dark">
            <Navbar.Brand>
                <p  className="text-center mt-4 mb-4">
                تمامی حقوق متعلق به جاب اونجا می باشد©
                </p>
                {/*<img*/}
                    {/*src="/logo.svg"*/}
                    {/*width="30"*/}
                    {/*height="30"*/}
                    {/*className="d-inline-block align-top"*/}
                    {/*alt="React Bootstrap logo"*/}
                {/*/>*/}
            </Navbar.Brand>
        </Navbar>
    </footer>
);

export default Footer;