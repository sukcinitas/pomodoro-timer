import React from 'react';

const Settings = () => {
    return (
        <>
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
        </>
    )
};

export default Settings;