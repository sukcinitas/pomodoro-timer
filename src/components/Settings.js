import React from 'react';
import { connect } from "react-redux";
import { sessionInc, sessionDec, pauseInc, pauseDec, setSeconds } from '../redux/actions';

const Settings = ({session, sessionInc, sessionDec, pauseInc, pauseDec, pause, styles, setSeconds, seconds}) => {


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


    
    return (
        <>
            <div id="session" style={styles}>
                <label id="session-label">session length</label>
                <button className="decrement" onClick={sessionDecrement}><i className="fas fa-caret-down"></i></button>
                <span className="length">{session}</span>
                <button className="increment" onClick={sessionIncrement}><i className="fas fa-caret-up"></i></button>
            </div>

            <div id="break" style={styles}>
                <label id="break-label">break length</label>
                <button className="decrement" onClick={pauseDecrement}><i className="fas fa-caret-down"></i></button>
                <span className="length">{pause}</span>
                <button className="increment" onClick={pauseIncrement}><i className="fas fa-caret-up"></i></button> 
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
        seconds: state.timer.seconds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sessionInc: () => dispatch(sessionInc()),
        sessionDec: () => dispatch(sessionDec()),
        pauseInc: () => dispatch(pauseInc()),
        pauseDec: () => dispatch(pauseDec()),
        setSeconds: (sec) => dispatch(setSeconds(sec))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
