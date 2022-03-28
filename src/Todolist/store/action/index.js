import { CHANGE_THEME, ADD_TASK, CHECK_TASK, DELE_TASK, EDIT_TASK, UPDATE_TASK } from "../constant";

export const changeTheme = payload => ({
    type: CHANGE_THEME,
    payload
})

export const addTask = payload => ({
    type: ADD_TASK,
    payload
})

export const checkTask = payload => ({
    type: CHECK_TASK,
    payload
})

export const deleTask = payload => ({
    type: DELE_TASK,
    payload
})

export const editTask = payload => ({
    type: EDIT_TASK,
    payload
})

export const updateTask = payload => ({
    type: UPDATE_TASK,
    payload,
})
