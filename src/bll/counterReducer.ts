
const initialState = {
    startCount: 0,
    maxCount: 2,
}

type InitialState = typeof initialState

export const counterReducer = (state: InitialState = initialState, action: changeSettingsAT): InitialState => {
    switch (action.type) {
        case "CHANGE_SETTINGS":
            return {...state, startCount: action.payload.startCount, maxCount: action.payload.maxCount}
        default:
            return state
    }
}

export const changeSettingsAC = (payload: InitialState) => ({
    type: 'CHANGE_SETTINGS',
    payload,
} as const)

export type changeSettingsAT = ReturnType<typeof changeSettingsAC>