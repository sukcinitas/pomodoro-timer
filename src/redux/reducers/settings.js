import {SESSION_INC, SESSION_DEC, BREAK_INC, BREAK_DEC} from '../actions';

const initialState = {
    session: 25,
    break: 5
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SESSION_INC: {
            return Object.assign({}, state, {session: state.session + 1})
        }
        case SESSION_DEC: {
            return Object.assign({}, state, {session: state.session - 1})
        }
        case BREAK_INC: {
            return Object.assign({}, state, {session: state.break + 1})
        }
        case BREAK_DEC: {
            return Object.assign({}, state, {break: state.break - 1})
        }
        default:
            return state;
    }
}