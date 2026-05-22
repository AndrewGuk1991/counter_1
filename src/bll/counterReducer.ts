import type {AppDispatch} from "./store.ts";

const initialState = {
    startCount: Number(localStorage.getItem('startCount')) || 0,
    maxCount: Number(localStorage.getItem('maxCount')) || 2,
}

type InitialState = typeof initialState

export const counterReducer = (state: InitialState = initialState, action: changeSettingsAT): InitialState => {
    switch (action.type) {
        case "COUNTER/CHANGE_SETTINGS":
            return {...state, startCount: action.payload.startCount, maxCount: action.payload.maxCount}
        default:
            return state
    }
}

export const changeSettingsAC = (payload: InitialState) => ({
    type: 'COUNTER/CHANGE_SETTINGS',
    payload,
} as const)

// export const setValuesFromLocalStorageAC = (payload: InitialState) => ({
//     type: 'SET_VALUES_FROM_LOCAL_STORAGE',
//     payload,
// })

export const changeSettingsTC = (values: InitialState) => (dispatch: AppDispatch) => {
    localStorage.setItem('startCount', JSON.stringify(values.startCount))
    localStorage.setItem('maxCount', JSON.stringify(values.maxCount))
    dispatch(changeSettingsAC(values))
}

// export const getValuesFromLocalStorageTC = () => (dispatch: AppDispatch) => {
//     const startCount = localStorage.getItem('startCount');
//     const maxCount = localStorage.getItem('maxCount');
//     const savedStartCount = startCount ? JSON.parse(startCount) : 0
//     const savedMaxCount = maxCount ? JSON.parse(maxCount) : 2
//     dispatch(changeSettingsAC({startCount: savedStartCount, maxCount: savedMaxCount}))
// }

export type changeSettingsAT = ReturnType<typeof changeSettingsAC>