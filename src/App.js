import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


class App extends React.Component{
  state = {
    isLoading : true,
    movie : []
  };
  getMovies = async() =>{
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies)
    this.setState({movies, isLoading : false})
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading,movies} = this.state;
    return ( 
    <section class = "container">
      {isLoading ? (
        <div class = "loader">
          <span class = "loader__text">Loading...</span>
        </div>
    ) : (
      <div class = "movies">
        {movies.map(movie=>(
      <Movie key ={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
    ))}
    </div>
        )}
      </section>
      );
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
