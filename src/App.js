import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  state = {
      seconds: this.props.from
    }    
  componentWillReceiveProps(nextProps){
      this.setState({
          seconds: nextProps.seconds
        });
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );  
  }
  tick() {        
       if(this.state.seconds < this.props.to )   
    this.setState({ seconds: this.state.seconds + 1});    
  } 
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
    resetTimer = () => {
    this.setState({seconds: this.props.from})
  }
  
 render() {
    return (
        <div className="parentDiv">
        <div  onClick={this.resetTimer} >
        <div className = "firstRow">
00  : {
              this.state.seconds.toString().length === 1?(`0${this.state.seconds}`):this.state.seconds
              }</div>
          
          <div className = "secondRow">
          <div>from : {this.props.from}   to : {this.props.to} </div>
          </div>           
        </div>
        </div>
          )
  }
}

export default Timer;


