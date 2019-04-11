import React, {Component} from 'react';

class Users extends Component <Props, any>{
    render() {
        return (
            <div>
                hi {this.props.yourname}
            </div>
        );
    }
}

export default Users;

interface Props {
    yourname : string;

}