import React from 'react';
import { connect } from "react-redux";
import { sessionInc, sessionDec, pauseInc, pauseDec, setSeconds, togglePauseSetting } from '../redux/actions';
import ThemeSelection from './ThemeSelection';

const Settings = ({session, sessionInc, sessionDec, pauseInc, pauseDec, pause, styles, setSeconds, seconds, togglePauseSetting, pauseSetting}) => {


    const sessionIncrement = () => {
        // clearInterval(this.interval);
        //max session length is 60 minutes
        if (session === 60) {
          return;
        } 
         sessionInc(); 
         setSeconds(seconds + 60);    
      }
      
    const sessionDecrement = () => {
        //min session length is 1 minute
        if (session === 1) {
          return;
        } 
        sessionDec();
        setSeconds(seconds - 60);  
      }
      
    const pauseIncrement = () => {
        //max break length is 60 minutes
        if (pause === 60) {
          return;
        } 
        pauseInc();
      }
      
    const pauseDecrement = () => {
        //min break length is 1 minute
        if (pause === 1) {
          return;
        } 
        pauseDec();
      }

    const togglePause = () => {
      pauseSetting == "enabled" ?
      togglePauseSetting("disabled") :
      togglePauseSetting("enabled") ;
    }

    const showOptions = () => {
      const options = document.querySelector("#options");
      options.classList.toggle("active");

      const settings = document.querySelector("#settings");
      settings.classList.toggle("active");

    }

    return (
        <>
            <button id="settings" onClick={showOptions}><i className="fas fa-cog"></i></button>
            <div id="options">
              <h2>SETTINGS</h2>
              <div id="session">
                  <label id="session-label">session duration</label>
                  <button className="decrement" onClick={sessionDecrement}><i className="fas fa-caret-down"></i></button>
                  <span className="length">{session}</span>
                  <button className="increment" onClick={sessionIncrement}><i className="fas fa-caret-up"></i></button>
              </div>
              <hr />
              <div id="break">
                  <label id="break-label">break duration</label>
                  <button className="decrement" onClick={pauseDecrement}><i className="fas fa-caret-down"></i></button>
                  <span className="length">{pause}</span>
                  <button className="increment" onClick={pauseIncrement}><i className="fas fa-caret-up"></i></button> 
              </div>
              <hr />
              <span id="pauseSetting" onClick={togglePause}>{pauseSetting == "enabled" ? "disable pausing" :  "enable pausing"}</span>
              <hr />
              <ThemeSelection />
            </div>
        </>
    )
};


function mapStateToProps(state) {
    console.log(state)
    return {
        session: state.settings.session,
        pause: state.settings.pause,
        styles: state.timer.styles,
        seconds: state.timer.seconds,
        pauseSetting: state.settings.pauseSetting
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sessionInc: () => dispatch(sessionInc()),
        sessionDec: () => dispatch(sessionDec()),
        pauseInc: () => dispatch(pauseInc()),
        pauseDec: () => dispatch(pauseDec()),
        setSeconds: (sec) => dispatch(setSeconds(sec)),
        togglePauseSetting: (param) => dispatch(togglePauseSetting(param))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
