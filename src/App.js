import React from "react";

function Food() {
  return <h1 > I like potato < /h1>
};

function App() {
  return ( < div >
    <
    h1 > Hello < /h1>  <Food / >
    <
    /div>
  );
};

export default App;

//component는 HTML을 반환하는 함수이다.
//react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
//jsx : javascript 와 HTML 사이의 조합
//component는 재사용 가능하다.