import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyComp extends React.Component{
  render(){
    return (<div><h1>Hello {this.props.name}</h1>
      <h2 style={{color:'green'}}>{this.props.children}</h2>
    </div>);
  }
}
class SubComp extends React.Component{
  render(){
    return (<div>Hi {this.props.name}
    <p>{this.props.children}</p>
    </div>)
  }
}
class App extends React.Component{
  render(){
   
    return(<div>
      <MyComp  name="Swan">Good Luck~</MyComp>
      <SubComp name={this.props.name}>{this.props.children}</SubComp>
    </div>)
  }
}

export default App;
