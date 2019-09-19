import React from 'react';
import { toggleGoing, changeLabel, setSeconds, toggleSettingsDisplay } from '../redux/actions';
import { connect } from "react-redux";


class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.makeTime =  this.makeTime.bind(this);
        this.timerGo = this.timerGo.bind(this);
        this.timerPause = this.timerPause.bind(this);
        this.timerTic = this.timerTic.bind(this);
        this.clear = this.clear.bind(this);
    }

    makeTime(sec){
        let timeInSec = sec;
        let minutes = Math.floor(timeInSec / 60);
        let seconds = timeInSec % 60;
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        return minutes + ":" + seconds;
    }
    timerTic(){
    //depends on this.state.seconds
    //if 'seconds' during session becomes 0, play sound and set break seconds, if break seconds - 0 - vice versa, cycle repeats ad infinitum, unless cleared
        if(this.props.seconds === 0 && this.props.timerLabel === "session") {
            document.getElementById("beep").play();
            this.props.setSeconds(this.props.pause * 60);
            this.props.changeLabel("break");
        } else if (this.props.seconds === 0 && this.props.timerLabel === "break"){
            document.getElementById("beep").play();
            this.props.setSeconds(this.props.session * 60);
            this.props.changeLabel("session");
        } else {
            this.props.setSeconds(this.props.seconds - 1);
        }
        console.log(this.props.seconds);
    }

    timerGo(){
    //if timer starts going, session and break length selections are not displayed, go button icon is changed by pause icon
        this.interval = setInterval(this.timerTic, 1000);
        this.props.toggleGoing({
            timerGoing: !this.props.timerGoing,
            styles: {display: "none"},
            goDisplay: {display: "none"}, 
            pauseDisplay: {display: "initial"},
            animation: {animation: "blinking 3000ms ease-in-out infinite"}
        });
    }
     
    timerPause(){
    //pause button icon is changed by go button icon
        clearInterval(this.interval);
        this.props.toggleGoing({
            timerGoing: !this.props.timerGoing,
            styles: {display: "none"},
            goDisplay: {display: "initial"}, 
            pauseDisplay: {display: "none"},
            animation: {animation: "none"}
        })
    }
      
    clear(){
        clearInterval(this.interval);
        document.getElementById("beep").pause();
        document.getElementById("beep").load();
        this.props.toggleGoing({
                timerGoing: false,
                styles: {},
                goDisplay: {display: "block"}, 
                pauseDisplay: {display: "none"},
                animation: {animation: "blinking2 10000ms infinite"}
        })
        this.props.changeLabel("session");
        this.props.setSeconds(1500);
        this.props.toggleSettingsDisplay(25, 5);
      }

    render() {
       return (
        <div id="timer">
            <h1 id="header">Pomodoro</h1>
            <div id="time-left">
                <p id="time-left-label">{this.makeTime(this.props.seconds)}</p>
                <p id="timer-label" style={this.props.animation}>{this.props.timerLabel}</p>
                <button id="start_stop" onClick={this.props.timerGoing ? this.timerPause : this.timerGo}><i className="fas fa-play" style={this.props.goDisplay}></i><i className="fas fa-pause" style={this.props.pauseDisplay}></i></button>
                <button id="reset" onClick={this.clear}><i className="fas fa-undo-alt"></i></button>
                <audio id="beep"><source src="http://filmsound.org/starwars/wookie1.wav" />
                </audio>  
            </div>
            <h1 id="header2">Timer</h1>
        </div>
        ) 
    } 
}

function mapStateToProps(state) {
    console.log(state)
    return {
        timerGoing: state.timer.timerGoing,
        goDisplay: state.timer.goDisplay,
        pauseDisplay: state.timer.pauseDisplay,
        timerLabel: state.timer.timerLabel,
        animation: state.timer.animation,
        styles: state.timer.styles,
        seconds: state.timer.seconds,
        session: state.settings.session,
        pause: state.settings.pause
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLabel: (label) => dispatch(changeLabel(label)),
        toggleGoing: (payload) => dispatch(toggleGoing(payload)),
        setSeconds: (sec) => dispatch(setSeconds(sec)),
        toggleSettingsDisplay: (session, pause) => dispatch(toggleSettingsDisplay(session, pause))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Timer);