import type {AppDispatch} from "./store.ts";
import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    startCount: Number(localStorage.getItem('startCount')) || 0,
    maxCount: Number(localStorage.getItem('maxCount')) || 2,
}

type InitialState = typeof initialState

export const changeSettingsAC = createAction<InitialState>('counter/changeSettingsAC');

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeSettingsAC, (state, action) => {
            state.startCount = action.payload.startCount
            state.maxCount = action.payload.maxCount
        })
})


export const changeSettingsTC = (values: InitialState) => (dispatch: AppDispatch) => {
    localStorage.setItem('startCount', String(values.startCount))
    localStorage.setItem('maxCount', JSON.stringify(values.maxCount))
    dispatch(changeSettingsAC(values))
}

