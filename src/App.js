import React, {Component} from "react";
import { robots } from "./Data/Robot";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})  
  }
  render(){
    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className="tc">
      <h2>RobotFriends</h2>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots}/>
      </div>
    )
}
}

export default App;
