import React from 'react';
import './App.scss';
import Settings from './components/Settings';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div id="pomodoro" style={{}}>
        <Settings />
        <Timer />
       </div> 
    )
  }
} 

export default App;
