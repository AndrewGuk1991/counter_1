import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";


export const buildCounterSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator}
})