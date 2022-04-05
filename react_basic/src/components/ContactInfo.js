import React,{Component} from 'react';

export default class ContactInfo extends Component{
    render(){
        return(<div onClick={(e)=>this.props.onClick(e)}>{this.props.contact.name} </div>);
    }
}