import React from 'react';

const Timer = () => {
    return (
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
    )
}
export default Timer;