//constants of actions
export const SESSION_INC = 'SESSION_INC';
export const SESSION_DEC = 'SESSION_DEC';
export const PAUSE_INC = 'PAUSE_INC';
export const PAUSE_DEC = 'PAUSE_DEC';
export const SET_THEME = 'SET_THEME';
export const TOGGLE_SETTINGS_DISPLAY = 'TOGGLE_SETTING_DISPLAY';
export const TOGGLE_GOING = 'TOGGLE_GOING';
export const CHANGE_LABEL = 'CHANGE_LABEL';
export const SET_SECONDS = 'SET_SECONDS';
export const TOGGLE_PAUSE_SETTING = 'TOGGLE_PAUSE_SETTING';

//action creators
export const sessionInc = () => {
    return {
        type: SESSION_INC
    }
}

export const sessionDec = () => {
    return {
        type: SESSION_DEC
    }
}

export const pauseInc = () => {
    return {
        type: PAUSE_INC
    }
}

export const pauseDec = () => {
    return {
        type: PAUSE_DEC
    }
}

export const themeSet = theme => {
    return {
        type: SET_THEME,
        theme
    }
}
export const toggleSettingsDisplay = (session, pause) => {
    return {
        type: TOGGLE_SETTINGS_DISPLAY,
        session, 
        pause
    }
}
export const toggleGoing = payload => {
    return {
        type: TOGGLE_GOING,
        payload
    }
}
export const changeLabel = label => {
    return {
        type: CHANGE_LABEL,
        label
    }
}
export const setSeconds = sec => {
    return {
        type: SET_SECONDS,
        sec
    }
}
export const togglePauseSetting = (param) => {
    return {
        type: TOGGLE_PAUSE_SETTING,
        param
    }
}