import React,{Component} from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedKey:-1,
            keyword:'',
           contactData:[ 
            {name:'Tom', tel:'010-1111-1111'},
            {name:'Susan', tel:'010-2111-2111'},
            {name:'Gradle', tel:'010-3111-3111'},
            {name:'Tobie', tel:'010-4111-4111'},
            {name:'Maybe', tel:'010-5111-5111'}
        ]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(e){
        this.setState({keyword:e.target.value})
    }
    handleClick(key,e){
        
        this.setState({selectedKey:key})
        console.log('selectedKey: '+key+", e: "+e.target.textContent);
    }


    render(){
        const mapToComponents =(data)=>{
            data.sort();//데이터를 먼저 정렬. sort()는 원본배열을 바꿈
            //반면 filter()함수는 원본배열을 필터링하여 새로운 배열을 반환함
            data=data.filter(
                (contact)=>{
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1;
                }
            );

            let _map=data.map((contact, i)=>{               
            return (<ContactInfo contact={contact} key={i}  onClick={(e)=>this.handleClick(i,e)}/>);
                    //Component에는 onClick이 적용되지 않음. natvie dom에만 적용됨. 따라서 props로 전달하자.
            });
            return _map;
        };
        return(<div>     
                <h1>My Phone Book</h1>
                <input type='text' name='keyword' placeholder='Search' value={this.state.keyword} onChange={this.handleChange}/>       
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails isSelected={this.state.selectedKey!=-1} contact={this.state.contactData[this.state.selectedKey]}/>
            </div>);
    }
}
//https://gist.github.com/velopert/460691415c722e0688336fb4084aff53