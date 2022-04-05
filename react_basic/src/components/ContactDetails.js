import React,{Component} from 'react';
import Contact from './Contact';
class ContactDetails extends Component{
  

    render(){
        const detail=(
            <div>        
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.tel}</p>
            </div>
        )
        const blank=(<div>Not Selected</div>)

        return (<div>
        <h2>Details</h2>
        {this.props.isSelected? detail:blank}
        </div>)
    }
}

ContactDetails.defaultProps={
    contact:{
        name:'',
        tel:''
    }
}
export default ContactDetails;
