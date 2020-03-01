import React from 'react';
import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList'
import { robots } from '../robots';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';

import './App.css'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}

class App extends React.Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render () {
    const { searchField , onSearchChange, robots, isPending} = this.props;
    console.log(searchField)
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    if(isPending){
      return (<h1>Loading</h1>)
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot friends</h1>
          <SearchBox onSearchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
