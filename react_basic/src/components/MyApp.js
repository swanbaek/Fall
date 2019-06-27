import React from 'react';
import Contact from './Contact'
//import는 es6의 새로운 문법
//이전에는
//var React = require('react')와 동일한 문법임

class MyApp extends React.Component{
    render(){
        return (<div>
        <input type='text' name='keyword' placeholder='이름을 입력하세요'/>
        <Contact/>
        </div>);
    }
}
//이 클래스를 다른곳에서도 불러올 수 있도록 export한다.
export default MyApp; //es6문법
//module.export=MyApp과 동일한 코드
//es5로 변환하면 위와같이 됨

//src안에 myindex.js파일을 작성하자.