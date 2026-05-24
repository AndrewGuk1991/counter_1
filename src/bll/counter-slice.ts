import {buildCounterSlice} from "./buildCounterSlice.ts";

export type CounterState = {
    startCount: number
    maxCount: number
}

export const counterSlice = buildCounterSlice({
    name: 'counter',
    initialState: {
        startCount: Number(localStorage.getItem('startCount')) || 0,
        maxCount: Number(localStorage.getItem('maxCount')) || 2,
    } as CounterState,
    selectors: {
        selectStartCount: state => state.startCount,
        selectMaxCount: state => state.maxCount
    },
    reducers: (create) => ({
        changeSettingsTC: create.asyncThunk((values: CounterState, {rejectWithValue}) => {
                try {
                    localStorage.setItem('startCount', String(values.startCount))
                    localStorage.setItem('maxCount', JSON.stringify(values.maxCount))
                    return values
                } catch (e) {
                    return rejectWithValue(e)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.startCount = action.payload.startCount
                    state.maxCount = action.payload.maxCount
                }
            })
    }),

})

export const counterReducer = counterSlice.reducer
export const {selectStartCount, selectMaxCount} = counterSlice.selectors
export const {changeSettingsTC} = counterSlice.actions

