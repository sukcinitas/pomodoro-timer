import {SESSION_INC, SESSION_DEC, PAUSE_INC, PAUSE_DEC, TOGGLE_SETTINGS_DISPLAY, TOGGLE_PAUSE_SETTING} from '../actions';

const initialState = {
    session: 25,
    pause: 5,
    pauseSetting: "enabled" 
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SESSION_INC: {
            return Object.assign({}, state, {session: state.session + 1})
        }
        case SESSION_DEC: {
            return Object.assign({}, state, {session: state.session - 1})
        }
        case PAUSE_INC: {
            return Object.assign({}, state, {pause: state.pause + 1})
        }
        case PAUSE_DEC: {
            return Object.assign({}, state, {pause: state.pause - 1})
        }
        case TOGGLE_SETTINGS_DISPLAY: {
            return Object.assign({}, state, {session: action.session,
                                             pause: action.pause})
        }
        case TOGGLE_PAUSE_SETTING: {
            return Object.assign({}, state, {pauseSetting: action.param})
        }
        default:
            return state;
    }
}