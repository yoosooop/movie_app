import React from "react";

class App extends React.Component{
  state = {
    isLoading : true,
    movie : []
  }
  render(){
    const {isLoading} = this.state
    return<div>{isLoading ? "Loading..." : "We are Ready"}</div>;
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false, book : true})
    },6000);
  }
}

export default App;

/*
class App extends React.Component{
  state = {
    count : 0
  }
  add = () => {
    console.log("add");
    //this.setState({count : this.state.count + 1})
    this.setState(current => ({count : current.count + 1}))
  };
  minus = () => {
    console.log("minus");
    //this.setState({count : this.state.count - 1})
    this.setState(current => ({count : current.count - 1}))
  };
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

*/
