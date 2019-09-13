import React from 'react';
import { connect } from "react-redux";
import { themeSet } from "../redux/actions";


const ThemeSelection = () => {

    setTheme = (e) => {
        body.classList.remove(this.state.theme);
        this.props.themeSet(e.target.dataset.theme);
        body.classList.add(e.target.dataset.theme);
    }

    return (
        <div id="theme-selection" onMouseOver={() => {document.querySelector("#tooltip").style.visibility = "visible"}} onMouseOut={() => {document.querySelector("#tooltip").style.visibility = "hidden"}}>
            <button onClick={this.setTheme} data-theme="initial"></button>
            <button onClick={this.setTheme} data-theme="second"></button>
            <button onClick={this.setTheme} data-theme="third"></button>
            <span id="tooltip">Select a theme</span>
        </div>  
    )
}

function mapStateToProps(state) {
    return {
        theme:initial
    };
}

const mapDispatchToProps = {
    setTheme
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelection);
