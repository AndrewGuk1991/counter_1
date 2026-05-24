import type {AppDispatch} from "./store.ts";
import {createSlice} from "@reduxjs/toolkit";

export type CounterState = {
    startCount: number
    maxCount: number
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        startCount: Number(localStorage.getItem('startCount')) || 0,
        maxCount: Number(localStorage.getItem('maxCount')) || 2,
    },
    selectors: {
        selectStartCount: state => state.startCount,
        selectMaxCount: state => state.maxCount
    },
    reducers: (create) => ({
        changeSettingsAC: create.reducer<CounterState>((state, action) => {
            state.startCount = action.payload.startCount
            state.maxCount = action.payload.maxCount
        })
    })
})


export const counterReducer = counterSlice.reducer
export const {changeSettingsAC} = counterSlice.actions;
export const {selectStartCount, selectMaxCount} = counterSlice.selectors

export const changeSettingsTC = (values: CounterState) => (dispatch: AppDispatch) => {
    try {
        localStorage.setItem('startCount', String(values.startCount))
        localStorage.setItem('maxCount', JSON.stringify(values.maxCount))
        dispatch(changeSettingsAC(values))
    } catch (e) {
        console.log("Ошибка записи в localStorage", e)
    }
}

// export const changeSettingsTC = createAsyncThunk(`${counterSlice.name}/changeSettingsTC`,
//     async (values: CounterState, {dispatch, rejectWithValue}) => {
//         try {
//             localStorage.setItem('startCount', String(values.startCount))
//             localStorage.setItem('maxCount', JSON.stringify(values.maxCount))
//             dispatch(changeSettingsAC(values))
//         } catch (e) {
//             return rejectWithValue(e)
//         }
//     })


