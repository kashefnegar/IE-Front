import React, {Component} from 'react';
import Header from "src/view/container/header/header";
import Tifanibar from "src/view/container/header/tifanibar";
import {Col, Row} from "react-bootstrap";
import Footer from "src/view/container/footer/footer";
import axios from "axios";


class UserProfile extends Component <Props,State>{
    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props, State);
        this.state = {
            data: []
        };
    }
    componentDidMount(): void{
        // @ts-ignore
        const { userid } = this.props.match.params;
        axios.get("http://localhost:8080/user/"+userid)
            .then(response=>{
                this.setState({
                        data:response.data
                    }
                )
            }, error=>{
                console.log('server errror')
            })


    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                {Header.call(this)}
                {Tifanibar.call(this,false ,true)}
                <main>

                </main>

                {Footer.call(this)}

            </div>
        );
    }
}


interface Props {
    // yourname : string;

}
interface State {
    data: []

}
export default UserProfile;