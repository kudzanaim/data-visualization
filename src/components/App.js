import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {poi} from './actions/action';
import './App.css';

import {Home} from './home/home';


export class App extends Component{

  render(){
    return (
      <div className="App">
          <Router>             
            <Switch>
              <Route exact path="/" render={()=><Home props={this.props}/>}/>
            </Switch>
          </Router>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  poi: state.poi,
  data: state.data,
})

const mapActionsToState = dispatch =>({
  poi: ()=>dispatch(   poi()    ),
})

export default connect( mapStateToProps, mapActionsToState )(App);