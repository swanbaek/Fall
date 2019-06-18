import React,{Component} from 'react';
class Nav extends Component {

    render() {    
      console.log("Nav render()")
    var data=this.props.data;
    console.log(data)
    var lists=[];
    var i=0;
    while(i<data.length){
        lists.push(
        <li key={data[i].id} className="nav-item">
          <a className="nav-link" href={'/'+data[i].url+'/'+data[i].id} data-id={data[i].id}
           onClick={function(mid,e){
           //  debugger
             //var mid=e.target.dataset.id; 또는 bind(함수의 2번째 매개변수로 넘기면 함수내에 mid변수가 받을 수 있음)
            e.preventDefault();

            if(mid===3){
              this.props.onChangeMode('login')
            }
           
            this.props.onMyChangePage(mid);
          }.bind(this, data[i].id)}>
          {data[i].title}</a>
        </li>);
         i++;
    }


        
        return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      {lists} 
    </ul>
  </div>  
</nav>
        );
    }
}

export default Nav;