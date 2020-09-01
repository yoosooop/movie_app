# Movie app
React JS Fundamentals Course(2020)


--- 
## Class component
- class 컴포넌트는 return을 하지 않는다. 이것은 function이 아니기 때문이다.
- function 컴포넌트는 함수이며 무언가를 return 한다. 그리고 화면에 나타남
- class 컴포넌트는 클래스이며 react component로 부터 확장되고 화면에 나타난다. 이것을 render method 안에 넣어야만 한다. 
- 리액트는 **자동적으로** 모든 class component의 render method를 실행하고자 한다.

---
## State
- state는 object이고 component의 data를 넣을 공간이 있고 **이 데이터는 변한다**.

**state를 변경하지만 state는 동작하지 않는다?!!**
- 리액트는 render function을 refresh하지 않기 때문이다.
- 매번 state의 상태를 변경할 때 리액트가 render function을 호출해서 바꿔야한다.
- setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출한다.
- setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않는다.



**current**
: state를 set할 때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법

React.Component 에서 사용하는 유일한 function은 render function이다.


---
## Life Cycle
- Life Cycle method는 기본적으로 react가 component를 생성하고 없애는 방법이다.

### Mounting
"태어나는 것"

1. contructor() 
: 자바스크립트에서 class를 만들 때 호출 됨

2. render()

3. componentDidMount()
: 렌더 후에

### Updating
"일반적인 업데이트"
1. static getDerivedStateFromProps()
2. shouldComponentUpdate() : 업데이트를 할 지 말지 결정
3. render() 
   
### Unmounting
"component가 죽는 것"(페이지 바뀔 때)