import React,{Component} from 'react';
import Aside from './Aside';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import LoginContent from './LoginContent';
import DeleteContent from './DeleteContent';
//import SubContent from './SubContent';

class Content extends Component{
    render(){
      console.log("Content render()",this.props.content)
      var title=this.props.title;
      var desc=this.props.desc;
      var article=this.props.article;
      var content=this.props.content;
      var _article=<ReadContent  title={title} desc={desc}></ReadContent>;
      if(this.props.article==='read'){
        _article=<ReadContent  title={title} desc={desc}></ReadContent>
      }else if(article==='create'){
        _article=<CreateContent  title={title} desc={desc} onSubmit={function(_title,_desc){
            this.props.onSubmit(_title, _desc);
        }.bind(this)}></CreateContent>
      }else if(article==='update'){
        _article=<UpdateContent data={content}  title={title} desc={desc}
         onSubmit={function(_id,_title,_desc){

          this.props.onSubmit(_id,_title, _desc);
      }.bind(this)}></UpdateContent>

      }else if(article==='delete'){
        _article=<DeleteContent  title={title} desc={desc} onSubmit={function(_title,_desc){
          this.props.onChangeMode('delete')
      }.bind(this)}></DeleteContent>

      }else if(article==='login'){
        _article=<LoginContent  title={title} desc={desc} onSubmit={function(_title,_desc){
          this.props.onSubmit(_title, _desc);
      }.bind(this)}></LoginContent>
      }

      return (
        
  
        <div className="container mt-5">
    <div className="row">
    
        <Aside onChangeMode={function(mode){
          this.props.onChangeMode(mode);
        }.bind(this)}></Aside>
        <div className="col-sm-8">
        {_article}
        {/* {<ReadContent title={title} desc={desc}></ReadContent>} */}
        {/* {<SubContent title="Hot Issue" desc="2019-06-05"></SubContent>
        <SubContent title="Million Movie" desc="2019-06-15"></SubContent>} */}
        </div>
    </div>
  </div>
  
  
      )
    }
  }

  export default Content;