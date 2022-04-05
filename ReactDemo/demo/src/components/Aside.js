import React,{Component} from 'react';

class Aside extends Component{
    render(){
      return (

    <div className="col-sm-4">      
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="/create"
         onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('create');
         }.bind(this)}>Create</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/update"
        onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('update');
         }.bind(this)}
        >Update</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/delete"
        onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('delete');
         }.bind(this)}
        >Delete</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <hr className="d-sm-none"></hr>
  </div>);
  }
  }

  export default Aside;