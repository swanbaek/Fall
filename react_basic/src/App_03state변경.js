import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';//PropType를 import 한다.
class Counter extends Component{
    constructor(args){
      super(args);
      this.state={
        count:0
      }
      //this.go=this.go.bind(this);
    }
    go(){
      this.setState({count:this.state.count+1})
    }

    render(){
      return (<div>
      <h1 style={{color:'red'}}>{this.state.count}</h1>
       <button onClick={this.go.bind(this)}>Plus</button>
       </div>);
    }
}

class App extends React.Component{
  render(){
    console.log("From App : name="+this.props.name)
    return(<div style={{padding:20}}>
       <Counter></Counter>
      
    </div>)
  }
}

export default App;
