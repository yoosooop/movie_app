import React from "react";

function Food({name,picture}) {
//console.log(props.fav)
  return (
  <div>
    <h2>I like {name}</h2>
    <img src = {picture}></img>
  </div>
  );
}

const foodILike = [
  {
    name : "김치",
    image : "https://www.usc.go.kr/resources/templates/garlicmuseum/assets/images/sub/kimchi_img1.png"
  },
  {
    name : "연어",
    image : "data:image/jpeg;base64,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"
  },
  {
    name : "김밥",
    image : "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG"
  }
];

function renderFood(dish){
  console.log(dish)
  return <Food name = {dish.name} picture={dish.image}/>
}

function App() {
  return ( 
  < div >
  {foodILike.map(renderFood)}
  </div>
  );
};

export default App;

//component는 HTML을 반환하는 함수이다.
//react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
//jsx : javascript 와 HTML 사이의 조합
//component는 재사용 가능하다.

//react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
//부모 컴포넌트에서 자식 컴포넌트로 원하는 많은 props를 보낼 수 있다.
//컴포넌트는 대문자로 시작
//map은 array의 각 item에서 function을 실행하는 array를 가지는 js 함수이며 그 함수의 result를 갖는 array를 나에게 준다.