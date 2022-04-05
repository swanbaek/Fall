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
      mode:'read',
      selected_content_id:2,
      header:{title:'Web', subtitle:'World Wide Web'},
      welcome:{title:'Welcome to',desc:"React World~"},
      links:[
        {id:1, title:'Home', url:"Home",desc:"Hello Home"},
        {id:2, title:'Board', url:"Board", desc:"Hello Board"},
        {id:3, title:'Login', url:"Login", desc:"Login Page"}
      ]
    }
  }

    render() {
      console.log("App render()")
        var _title='', _desc='';
        if(this.state.mode==='welcome'){
            _title=this.state.welcome.title;
            _desc=this.state.welcome.desc;
        }else if(this.state.mode==='read'){
            var data=this.state.links;
          for(var i=0;i<this.state.links.length;i++){
               if(data[i].id===this.state.selected_content_id){
                _title=data[i].title;
                _desc=data[i].desc;
                break;
               }//if--------------       
          }//for-----------
          
        }
        console.log('render', this);
        return ( < div className = 'container' >
             <Header title={this.state.header.title} subtitle={this.state.header.subtitle} onMyChangePage={function(){
               // alert('hello');
                this.setState({mode:'welcome'})
             }.bind(this)} > </Header>
            <Nav data={this.state.links} onMyChangePage={function(id){
              //alert('hi');
              this.setState({mode:'read', selected_content_id:parseInt(id)})
            }.bind(this)}></Nav>
            <Content title={_title} desc={_desc} onChangeMode={function(_mode){
                this.setState({mode:_mode});
            }.bind(this)}></Content> 
            </div> );
            //이 때 render()함수에서 반환되는 태그는 root태그 딱 하나여야 함
            //  여러 태그가 있다거나 없으면 에러남  
        }
    }
    export default App