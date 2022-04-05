import React,{Component} from 'react';
class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
    }
    inputFormHandler(e){
        //console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value}) 
    }
    render(){
      //console.log("UpdateContent render()==",this.props.data);
      return (
        <div>
        <h2 className='text-success'>Edit</h2>
        <form name="frm" className="form-role" action="create-process" method="post" onSubmit= {
            function(e){
               
                e.preventDefault();
                //alert('Submit');
                this.props.onSubmit(e.target.title.value, e.target.desc.value,e.target.id.value);
            }.bind(this)
            }>
            
        <p>
        {/* {value={this.props.data.title} } 이런식으로 value값에 넣어주면 안됨.
        props는 readonly속성이 있으므로 수정할 수 없다. 따라서 constructor를 구성하고 
        state를 이용해 title,desc값을 전달하자.
        하지만 this.state.title로 value에 주어도 수정되지 않으며, onChange이벤트와 함께
        사용하여 setState()함수통해 변경되도록 조치해야 함*/}
            <input type="text" name="title"
               value={this.state.title} onChange={this.inputFormHandler.bind(this)}
             placeholder="Title" className="form-control"></input>
            </p>
        <p>
            <textarea name="desc" placeholder="Description" className="form-control"
             value={this.state.desc} onChange={this.inputFormHandler.bind(this)}></textarea>
        </p>     
        <p>
                <input type="hidden" name="id" value={this.state.id}></input>
            </p> 
        <button className="btn btn-outline-warning">Submit</button>  
        </form>
        </div>
      );
  
    }
  }

  export default UpdateContent;