import {SESSION_INC, SESSION_DEC, PAUSE_INC, PAUSE_DEC, TOGGLE_SETTINGS_DISPLAY} from '../actions';

const initialState = {
    session: 25,
    pause: 5
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
        default:
            return state;
    }
}