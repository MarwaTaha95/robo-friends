import React from 'react';
import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList'
import { robots } from '../robots';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      robots: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
        robots: users
      }))

  }

  onSearchChange = (event) => {
    var value = event.target.value;
    console.log(value);

    this.setState({
      search: value
    })
  }


  render () {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.search.toLowerCase()));

    if(this.state.robots.length === 0){
      return (<h1>Loading</h1>)
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot friends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
