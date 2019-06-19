import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';//PropType를 import 한다.

class MyComp extends React.Component{
  render(){
    return (<div><h1>Hello {this.props.name}</h1>
    <h1>{this.props.num}</h1>
      <h2 style={{color:'green'}}>{this.props.children}</h2>
    </div>);
  }
}
//props의 자료유형을 정의
MyComp.propTypes={
  name:PropTypes.string,
  num:PropTypes.number.isRequired
}
//props의 디폴트값을 정의
MyComp.defaultProps={
  name:'Hong',
  num:1
}

class App extends React.Component{
  render(){
    console.log("From App : name="+this.props.name)
    return(<div>
      <MyComp>Good Luck~</MyComp>
      <MyComp num={7} name="Swan">Lucky Seven</MyComp>     
    </div>)
  }
}

export default App;
