import React from 'react';
import { connect } from "react-redux";
import { themeSet } from '../redux/actions';

const body = document.getElementsByTagName("BODY")[0];

class ThemeSelection extends React.Component {
    constructor(props) {
        super(props);

        this.setTheme = this.setTheme.bind(this);   
    }

    setTheme(e){
        this.props.themeSet(e.target.dataset.theme); 
    } 

    render() {
        body.classList = `${this.props.theme}`;
        return (
            <div id="theme-selection" onMouseOver={() => {document.querySelector("#tooltip").style.visibility = "visible"}} onMouseOut={() => {document.querySelector("#tooltip").style.visibility = "hidden"}}>
                <button onClick={this.setTheme} data-theme="initial"></button>
                <button onClick={this.setTheme} data-theme="second"></button>
                <button onClick={this.setTheme} data-theme="third"></button>
                <span id="tooltip">Select a theme</span>
            </div>  
        )
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme
    };
}

function mapDispatchToProps(dispatch) {
    return {
        themeSet: (theme) => dispatch(themeSet(theme))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelection);
