import React, { Component } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';

import Content from './components/Content';


//클래스방식
class App extends Component {
  constructor(props){
    super(props);
    //render()함수보다 먼저 실행되면서 컴포넌트를 초기화시켜주고 싶은
    //코드는 생성자안에서 작성한다.
    this.state={
      mode:'welcome',
      header:{title:'Web', subtitle:'World Wide Web'},
      welcome:{title:'Welcome to',desc:"React World~"},
      links:[
        {id:'1', title:'Home', url:"Home",desc:"Hello Home"},
        {id:'2', title:'Board', url:"Board", desc:"Hello Board"},
        {id:'3', title:'Login', url:"Login", desc:"Login Page"}
      ]
    }
  }

    render() {
      console.log("App render()")
        var _title='', _desc='';
        if(this.state.mode==='welcome'){
            _title=this.state.welcome.title;
            _desc=this.state.welcome.desc;
        }else if(this.state.mode==='home'){
           _title=this.state.links[0].title;
           _desc=this.state.links[0].desc;
        }
        console.log('render', this);
        return ( < div className = 'container' >
            {/* <Header title={this.state.header.title} subtitle={this.state.header.subtitle} > </Header>  */}
            <div className = "jumbotron text-center" >
            
            <h1 ><a href="/" onClick={function(e){
                alert('hi');
                e.preventDefault();
                //this.state.mode="welcome";//이런 식으로 state의 값을 바꾸려하면 안됨
                this.setState({mode:"welcome"});
                 }.bind(this)}>{this.state.header.title}</a>  </h1> 
            <p className="text-info"> {this.state.header.subtitle}</p>
            </div> 
            <Nav data={this.state.links}></Nav>
            <Content title={_title} desc={_desc}></Content> 
            </div> );
            //이 때 render()함수에서 반환되는 태그는 root태그 딱 하나여야 함
            //  여러 태그가 있다거나 없으면 에러남  
        }
    }
    export default App