import React, {Component} from "react";
import { robots } from "./Robot";
import CardList from "./Components/CardList";
import SearchBox from "./SearchBox";


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield:""
    }
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
