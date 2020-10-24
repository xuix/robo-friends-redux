import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {requestRobots, setSearchField} from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'


const mapStateToProps=state=>{

  return {searchField:state.searchRobots.searchField,
          robots:state.requestRobots.robots,
          isPending:state.requestRobots.isPending,
          error:state.requestRobots.error}

}

const mapDispatchToProps =(dispatch)=>{

  return{
    onRequestRobots: ()=>dispatch(requestRobots()),
    onSearchChange: (event)=>dispatch(setSearchField(event.target.value))
  }

}


class App extends React.Component {

componentDidMount(){

 this.props.onRequestRobots()

}

  render (){

    //const {robots} = this.state;
    const {searchField, onSearchChange,robots,isPending,error}=this.props
    const  filteredRobots = robots.filter(robot =>{

          return (robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    

    })
    
    
        return ((isPending)? "Loading"  :

              <div className="tc">
                <header className="f1 pa2">
                     Robo Friends
                </header>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                  <ErrorBoundary>
                      <CardList robots={filteredRobots}/>
                  </ErrorBoundary>
                 
                </Scroll>
               
            </div>
         )
  }
}
    export default connect(mapStateToProps,mapDispatchToProps)(App);
