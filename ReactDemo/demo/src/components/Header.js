import React,{Component} from 'react'
class Header extends Component {
    render() {
        console.log("Header render()")
        return ( <div className = "jumbotron text-center" >
            <h1 ><a href="/" onClick={function(e){              
                e.preventDefault();
                this.props.onMyChangePage();
            }.bind(this)}>{this.props.title}</a>  </h1> 
            <p className="text-info"> {this.props.subtitle}</p>
            </div> );
    }
}

export default Header;