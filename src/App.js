import React from 'react';
import './App.scss';

//setting initial theme
const body = document.getElementsByTagName("BODY")[0];
body.classList.add("initial");

//converts this.state.seconds to minutes:seconds format
let makeTime = function(sec) {
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
      styles: {}, //toggle session and break display
      timerLabel: "session",
      goDisplay: {display: "initial"}, //
      pauseDisplay: {display: "none"},
      animation: {animation: "blinking2 10000ms infinite"},
      theme: "initial"
    }

    this.sessionInc = this.sessionInc.bind(this);
    this.sessionDec = this.sessionDec.bind(this);
    this.breakInc = this.breakInc.bind(this);
    this.breakDec = this.breakDec.bind(this);
    this.timerGo = this.timerGo.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.timerTic = this.timerTic.bind(this);
    this.clear = this.clear.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  
  sessionInc(e) {
    //clearInterval(this.interval);
    //max session length is 60 minutes
    if (this.state.session === 60) {
      return;
    } 
    this.setState ({
      session: this.state.session + 1,
      seconds: (this.state.session + 1) * 60,
    })
  }
  
  sessionDec() {
    //min session length is 1 minute
    if (this.state.session === 1) {
      return;
    } 
    this.setState ({
      session: this.state.session - 1,
      seconds: (this.state.session - 1) * 60,
    })
  }
  
  breakInc() {
    //max break length is 60 minutes
    if (this.state.break === 60) {
      return;
    } 
    this.setState ({
      break: this.state.break + 1
    })
  }
  
  breakDec() {
    //min break length is 1 minute
    if (this.state.break === 1) {
      return;
    } 
    this.setState ({
      break: this.state.break - 1
    })
  }
  
  timerTic () {
    //depends on this.state.seconds
    //if this.state.seconds during session becomes 0, play sound and set break seconds, if break seconds - 0 - vice versa, cycle repeats ad infinitum, unless cleared
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
    } else {
    this.setState ({
      seconds: this.state.seconds - 1
    })
    }
  }

  timerGo () {
    //if timer starts going, session and break length selections are not displayed, go button icon is changed by pause icon
    this.interval = setInterval(this.timerTic, 1000);
    this.setState ({
      timerGoing: !this.state.timerGoing,
      styles: {display: "none"},
      goDisplay: {display: "none"},
      pauseDisplay: {display: "initial"},
      animation: {animation: "blinking 3000ms ease-in-out infinite"}
    })
  }
 
  timerPause () {
    //pause button icon is changed by go button icon
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

  setTheme(e) {
    body.classList.remove(this.state.theme);
    this.setState ({
      theme: e.target.dataset.theme
    })
    body.classList.add(e.target.dataset.theme);
  }

  render() {
    return (
      <div id="pomodoro" style={{}}>

        <div id="session" style={this.state.styles}>
          <label id="session-label">session length</label>
          <button className="decrement" onClick={this.sessionDec}><i className="fas fa-caret-down"></i></button>
          <span className="length">{this.state.session}</span>
          <button className="increment" onClick={this.sessionInc}><i className="fas fa-caret-up"></i></button>
        </div>

        <div id="break" style={this.state.styles}>
          <label id="break-label">break length</label>
          <button className="decrement" onClick={this.breakDec}><i className="fas fa-caret-down"></i></button>
          <span className="length">{this.state.break}</span>
          <button className="increment" onClick={this.breakInc}><i className="fas fa-caret-up"></i></button> 
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

        <div id="theme-selection" onMouseOver={() => {document.querySelector("#tooltip").style.visibility = "visible"}}
        onMouseOut={() => {document.querySelector("#tooltip").style.visibility = "hidden"}}>
            <button onClick={this.setTheme} data-theme="initial"></button>
            <button onClick={this.setTheme} data-theme="second"></button>
            <button onClick={this.setTheme} data-theme="third"></button>
            <span id="tooltip">Select a theme</span>
        </div>
       </div> 
    )
  }
} 

export default App;
