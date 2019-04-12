import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './view/users/users';
// import "react-bootstrap/dist/react-bootstrap.min.js";
import Users from "src/view/users/users";

class App extends Component<props, state> {
  changetitle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () =>
  {
    this.setState({title:'new title'});
  }
  // changetitle: any;

  constructor(props: props){
    super(props);
    this.state ={
      title: 'fuck'
    }
  }
  render() {

    const x: number = 2;
    // const u: any = 1; nemidonim chye
    return (
        <div>
          <h1>Hello World</h1>
        </div>
      // {/*<div className="App">*/}
      //   {/*<header className="App-header">*/}
      //     {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      //     {/*<p>*/}
      //       {/*/!*Edit <code>src/App.tsx</code> and save to reload.*!/*/}
      //       {/*Learn React*/}
      //     {/*</p>*/}
      //     {/*<button onClick={this.changetitle}> click</button>*/}
      //     {/*<section>*/}
      //       {/*<Users yourname = "hi"/>*/}
      //     {/*</section>*/}
      //     {/*/!*<a*!/*/}
      //       {/*/!*className="App-link"*!/*/}
      //       {/*/!*href="https://reactjs.org"*!/*/}
      //       {/*/!*target="_blank"*!/*/}
      //       {/*/!*rel="noopener noreferrer"*!/*/}
      //     {/*/!*>*!/*/}
      //
      //     {/*/!*</a>*!/*/}
      //   {/*</header>*/}
      // {/*</div>*/}
    );
  }

}

export default App;
//baraye khodemone
interface  props
{
  // title : string

}
//state taghir cone dobare render mishe
interface state
{
  title: string
}