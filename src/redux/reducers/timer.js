import {CHANGE_LABEL, TOGGLE_GOING, SET_SECONDS} from '../actions';

const initialState = {
    timerGoing: false,
    styles: {},
    timerLabel: "session",
    goDisplay: {display: "initial"}, 
    pauseDisplay: {display: "none"},
    animation: {animation: "blinking2 10000ms infinite"},
    seconds: 25 * 60 
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_GOING: {
            return Object.assign({}, state, action.payload)
        }
        case CHANGE_LABEL: {
            return Object.assign({}, state, {timerLabel: action.label})
        }
        case SET_SECONDS: {
            return Object.assign({}, state, {seconds: action.sec})
        }
        default:
            return state;
    }
}

