import SET_THEME from '../actions';

const initialState = {
    theme: initial
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_THEME: {
            return Object.assign({}, state, {theme: action.theme})
        }
        default:
            return state;
    }
}