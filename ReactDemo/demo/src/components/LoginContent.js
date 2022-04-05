import React,{Component} from 'react';
class LoginContent extends Component{
    render(){
      console.log("LoginContent render()")
      return (
        <div>
        <h2 className='text-success'>Login</h2>
        <form name="frm" className="form-role" action="create-process" method="post" onSubmit= {
            function(e){
                // if(!document.forms[0].title.value){
                //     alert('Title을 입력하세요'); 
                //     document.forms[0].title.focus(); 
                //     e.preventDefault();                                  
                // }
                // if(!document.forms[0].desc.value){
                //     alert('Description을 입력하세요'); 
                //     document.forms[0].desc.focus();
                //     e.preventDefault();
                // }
                e.preventDefault();
                //alert('Submit');
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)
            }>
        <p>
            <input type="text" name="userid" placeholder="UserID" className="form-control"></input>
            </p>
        <p>
        <input type="password" name="pwd" placeholder="Password" className="form-control"></input>
        </p>      
        <button class="btn btn-outline-danger">Login</button>  
        </form>
        </div>
      );
  
    }
  }

  export default LoginContent;