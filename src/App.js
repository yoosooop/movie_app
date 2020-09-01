import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  }
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  }
  render() {
     //즉시 호출되는 것이 아니라 click 했을 때만 function이 호출되길 원한다.
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;

//component는 HTML을 반환하는 함수이다.
//react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
//jsx : javascript 와 HTML 사이의 조합
//component는 재사용 가능하다.

//react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
//부모 컴포넌트에서 자식 컴포넌트로 원하는 많은 props를 보낼 수 있다.
//컴포넌트는 대문자로 시작
//map은 array의 각 item에서 function을 실행하는 array를 가지는 js 함수이며 그 함수의 result를 갖는 array를 나에게 준다.

