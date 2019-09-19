import { SET_THEME } from '../actions';


export default function(state = "initial", action) {
    switch (action.type) {
        case SET_THEME: {
            return action.theme
        }
        default:
            return state;
    }
}