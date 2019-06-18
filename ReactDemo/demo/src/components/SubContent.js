import React,{Component} from 'react';
class SubContent extends Component{
    render(){
      console.log("SubContent render()")
      return (
        <div>
        <h2>{this.props.title}</h2>
        <h5>{this.props.desc}</h5>
        <div className="fakeimg">Fake Image</div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <br/>
        </div>
      );
  
    }
  }

  export default SubContent;