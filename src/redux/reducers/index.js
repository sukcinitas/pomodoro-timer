import {combineReducers} from 'redux';
import setTheme from './setTheme';
import settings from './settings';
import timer from './timer';


export default combineReducers({
    theme: setTheme,
    settings: settings,
    timer: timer
})