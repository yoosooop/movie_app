# Movie app

React JS Fundamentals Course(2020)

## Class component
- class 컴포넌트는 return을 하지 않는다. 이것은 function이 아니기 때문이다.
- function 컴포넌트는 함수이며 무언가를 return 한다. 그리고 화면에 나타남
- class 컴포넌트는 클래스이며 react component로 부터 확장되고 화면에 나타난다. 이것을 render method 안에 넣어야만 한다. 
- 리액트는 **자동적으로** 모든 class component의 render method를 실행하고자 한다.


## State
- state는 object이고 component의 data를 넣을 공간이 있고 **이 데이터는 변한다**.

**state를 변경하지만 state는 동작하지 않는다?!!**
> 리액트는 render function을 refresh하지 않기 때문이다.
> 매번 state의 상태를 변경할 때 리액트가 render function을 호출해서 바꿔야한다.
> setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출한다.
> setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않는다.

**curren
: state를 set할 때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
