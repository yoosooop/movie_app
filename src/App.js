import React from "react";
import PropTypes from "prop-types";

function Food({name,picture,rating}) {
//console.log(props.fav)
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src = {picture} alt = {name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id : 1,
    name : "김치",
    image : "https://www.usc.go.kr/resources/templates/garlicmuseum/assets/images/sub/kimchi_img1.png",
    rating : 4.5
  },
  {
    id : 2,
    name : "연어",
    image : "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*",
    rating : 3.2
  },
  {
    id : 3,
    name : "김밥",
    image : "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating : 2.1
  }
];

function App() {
  return ( 
  < div >
  {foodILike.map(dish => (
    <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
  ))}
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