import React, { Component }  from 'react'

import './style.scss';

export default class StopWatch extends Component {
    constructor(props){
      super(props);
      this.state = {time: 0, clockRun: false};
    }

    start(){
      this.setState({clockRun: true});
      this.timerID = setInterval(
        () => this.setState({time: ++this.state.time}),
        1000
      );
    }

    stop(){
      clearInterval(this.timerID);
      this.setState({clockRun:false});
    }

    restart(){
      clearInterval(this.timerID);
      this.setState({time: 0, clockRun: false });
    }

    startStop(){
      if (this.state.clockRun) {
        return (<i className='material-icons stop' onClick={this.stop.bind(this)}>pause_circle_outline</i>);
      } else {
        return (<i className='material-icons start' onClick={this.start.bind(this)}>play_circle_outline</i>);
      }
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
      return(
          <h2 className='stopwatch'>
            {this.startStop()}
            <span>
              {minDigits(Math.trunc(this.state.time/60), 2)}:{minDigits(this.state.time%60, 2)}
            </span>
            <i className='material-icons reset'  onClick={this.restart.bind(this)}>replay</i>
        </h2>
        );
    }
}

function minDigits(val, digit){
  return val.toLocaleString( undefined, {minimumIntegerDigits: 2});
}