import React from 'react';
import './App.css';

let makeTime = function (sec) {
  let timeInSec = sec;
  let minutes = Math.floor(timeInSec / 60);
  let seconds = timeInSec % 60;
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  return minutes + ":" + seconds;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      seconds: 25 * 60,
      timerGoing: false,
      styles: {},
      timerLabel: "session",
      goDisplay: {},
      pauseDisplay: {display: "none"},
      animation: {animation: "blinking2 10000ms infinite"}

    }
    this.sessionInc = this.sessionInc.bind(this);
    this.sessionDec = this.sessionDec.bind(this);
    this.breakInc = this.breakInc.bind(this);
    this.breakDec = this.breakDec.bind(this);
    this.timerGo = this.timerGo.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.timerGoGo = this.timerGoGo.bind(this);
    this.clear = this.clear.bind(this);
  }
  
  sessionInc() {
    clearInterval(this.interval)
    if (this.state.session === 60) {
      this.setState ({
      session: this.state.session
    })
    } else{
    this.setState ({
      session: this.state.session + 1,
      seconds: (this.state.session + 1) * 60,
    })
  }
  }
  
  sessionDec() {
    if (this.state.session === 1) {
      this.setState ({
      session: this.state.session
    })
    } else {
    this.setState ({
      session: this.state.session - 1,
      seconds: (this.state.session - 1) * 60,
    })
    }
  }
  
  breakInc() {
  if (this.state.break === 60) {
    this.setState ({
      break: this.state.break
    })
     } else {
    this.setState ({
      break: this.state.break + 1
    })
  }
     }
  
  breakDec() {
  if (this.state.break === 1) {
    this.setState ({
      break: this.state.break
    })
     } else {
    this.setState ({
      break: this.state.break - 1
    })
     }
  }
  
  timerGoGo () {
    if(this.state.seconds === 0 && this.state.timerLabel === "session") {
      document.getElementById("beep").play();
      this.setState ({
      seconds: this.state.break * 60,
      timerLabel: "break"
      
      })
    } else if (this.state.seconds === 0 && this.state.timerLabel === "break"){
      document.getElementById("beep").play();
      this.setState ({
      seconds: this.state.session * 60,
      timerLabel: "session"
      })
    }
    else {
    this.setState ({
      seconds: this.state.seconds - 1
    })
    }
  }

  timerGo () {
    this.interval = setInterval(this.timerGoGo, 1000)
    this.setState ({
      timerGoing: !this.state.timerGoing,
      styles: {display: "none"},
      goDisplay: {display: "none"},
      pauseDisplay: {display: "initial"},
      animation: {animation: "blinking 3000ms ease-in-out infinite"}
    })
  }
 
  timerPause () {
    clearInterval(this.interval);
    this.setState ({
      timerGoing: !this.state.timerGoing,
      styles: {display: "none"},
      goDisplay: {display: "initial"},
      pauseDisplay: {display: "none"},
      animation: {animation: "none"}
    })
  }
  
  clear () {
    clearInterval(this.interval);
      document.getElementById("beep").pause();
      document.getElementById("beep").load();
      this.setState ({
      styles: {},
      seconds: 25 * 60,
      session: 25, 
      break: 5,
      timerGoing: false,
      timerLabel: "session",
      goDisplay: {display: "initial"},
      pauseDisplay: {display: "none"},
      animation: {animation: "blinking2 10000ms infinite"}
    })
  }
  
  render() {
    return (
      <div id="pomodoro" style={{}}>
        <div id="session" style={this.state.styles}>
          <label id="session-label">session length</label>
          <button class="decrement" onClick={this.sessionDec}><i className="fas fa-caret-down"></i></button>
          <span class="length">{this.state.session}</span>
          <button class="increment" onClick={this.sessionInc}><i className="fas fa-caret-up"></i></button>
        </div>
        <div id="break" style={this.state.styles}>
          <label id="break-label">break length</label>
          <button class="decrement" onClick={this.breakDec}><i className="fas fa-caret-down"></i></button>
          <span class="length">{this.state.break}</span>
          <button class="increment" onClick={this.breakInc}><i className="fas fa-caret-up"></i></button> 
        </div>
        <div id="timer">
          <h1 id="header">Pomodoro</h1>
          <div id="time-left">
            <p id="time-left-label">{makeTime(this.state.seconds)}</p>
            
            <p id="timer-label" style={this.state.animation}>{this.state.timerLabel}</p>
            <button id="start_stop" onClick={this.state.timerGoing ? this.timerPause : this.timerGo}><i className="fas fa-play" style={this.state.goDisplay}></i><i className="fas fa-pause" style={this.state.pauseDisplay}></i></button>
            <button id="reset" onClick={this.clear}><i className="fas fa-undo-alt"></i></button>
            <audio id="beep"><source src="http://filmsound.org/starwars/wookie1.wav" />
            </audio>  
         </div>
         <h1 id="header2">Timer</h1>
         
          
        </div>
       </div>
    )
  }
} 



export default App;
