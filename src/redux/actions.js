//constants of actions
export const SESSION_INC = 'SESSION_INC';
export const SESSION_DEC = 'SESSION_DEC';
export const BREAK_INC = 'BREAK_INC';
export const BREAK_DEC = 'BREAK_DEC';
export const SET_THEME = 'SET_THEME';

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

export const breakInc = () => {
    return {
        type: BREAK_INC
    }
}

export const breakDec = () => {
    return {
        type: BREAK_DEC
    }
}

export const themeSet = (theme) => {
    return {
        type: SET_THEME,
        theme
    }
}