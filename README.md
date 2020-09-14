# Movie app
React JS Fundamentals Course(2020)


--- 
## Component
- component는 HTML을 반환하는 함수이다.
- react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
- jsx : javascript 와 HTML 사이의 조합
- component는 재사용 가능하다.

- react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
- 부모 컴포넌트에서 자식 컴포넌트로 원하는 많은 props를 보낼 수 있다.
- 컴포넌트는 대문자로 시작

---
## Map
- map은 array의 각 item에서 function을 실행하는 array를 가지는 js 
- map으로 부터 뭔가를 return해야만 한다.
함수이며 그 함수의 result를 갖는 array를 나에게 준다.

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

---
## axios
-> fetch 위에 있는 작은 layer
- axios는 조금 느리기 때문에 javascript에게 componentDidMount 함수가 끝날 때까지 약간의 시간이 걸릴 수 있다고 말해야한다.
    - 비동기 함수 이용 async await

---
## gh-pages
: 나의 웹사이트를 github의 github page 도메인에 나타나게 해준다.
```
https://{your github username}.github.io/{the name of your project in github}
```
- 프로젝트명 및 username 모두 소문자다.
-> package.json 에 홈페이지를 추가하여 입력한다.

- deploy : build 폴더를 upload 한다.
    - build 폴더를 얻는 방법은 npm run build를 실행시키는 것이다.
    - npm run build를 실행하면 우리에게 build 폴더를 제공한다.
- predeploy : deploy를 먼저 호출하기 전 자동적으로 실행된다.
---
## Link
: ` <a  href > `가 리액트에서 실행시에 home 클릭시 전체 페이지가 새로고침 되버린다.
-> import Link 를 이용한다.
- Link를 사용하려면 Link는 라우터 안에 있어야 한다.
  -> 페이지에 footer가 있다면 footer를 사용한다.
  -> HashRouter를 사용하면 된다.